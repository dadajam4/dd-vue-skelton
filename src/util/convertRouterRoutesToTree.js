/**
 * vue-router のrouteオプションの配列をツリーに状にコンバートする
 *   settingsで順序やラベルを指定可能
 *   matchはstringの時は完全一致
 *   settings = [
 *     {match: '/', ignore: true},
 *     {match: '/getting-started', label: '始めに', order: 1, icon: 'cube'},
 *     {match: /^\/layout$/, order: 2, icon: 'th-list'},
 *     {match: /^\/components$/, order: 3, icon: 'th-large'},
 *     {match: /^\/elements$/, order: 4, icon: 'truck'},
 *     {match: /^\/style$/, order: 5, icon: 'columns'},
 *   ];
 */
export default function convertRouterRoutesToTree(routes, settings = []) {
  const rootRoute = {path: '/', name: null, children: []};

  for (let route of routes) {
    const setting = settings.find(s => typeof s.match === 'string' ? s.match === route.path : route.path.match(s.match));
    if (setting && setting.ignore) continue;
    route = Object.assign({}, route, setting);

    const dirs = route.path.replace(/(^\/|\/:.*$)/g, '').split('/');
    let parent = rootRoute;
    let searchPath = '';
    for (let i = 0, l = dirs.length - 1; i < l; i++) {
      const dir = dirs[i];
      searchPath += ('/' + dir);
      parent.children = parent.children || [];
      let newParent = parent.children.find(route => route.path === searchPath);
      if (!newParent) {
        const setting = settings.find(s => typeof s.match === 'string' ? s.match === searchPath : searchPath.match(s.match));
        newParent = Object.assign({path: searchPath, name: null}, setting);
        parent.children.push(newParent);
      }
      parent = newParent;
    }
    parent.children = parent.children || [];
    parent.children.push(route);
  }

  const sort = children => {
    if (!children) return;
    children.sort((a, b) => {
      if (a.name === 'index') return -1;
      if (b.name === 'index') return 1;
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    const orderedChildren = children.filter(child => child.order !== undefined);
    orderedChildren.forEach(child => {
      const currentIndex = children.indexOf(child);
      const tmp = children[child.order];
      children[child.order] = child;
      children[currentIndex] = tmp;
    });
  }

  sort(rootRoute.children);
  return rootRoute;
}
