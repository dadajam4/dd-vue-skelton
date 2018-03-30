import { convertRouterRoutesToTree } from '~/util';



export class NavigationRoute {
  constructor({path, name, label, icon, children, customMeta = {}}, parnet = null) {
    this.path = path;
    this.name = name;
    this.customMeta = customMeta;
    this.parnet = parnet;
    this.root = parnet && parnet.root || this;
    this.label = label || this.path.replace((parnet || this.root).path, '').replace(/(^\/|\/:.*$)/g, '').replace(/-/g, ' ');
    this.capitalizedLabel = this.label.charAt(0).toUpperCase() + this.label.slice(1);
    this.icon = icon;
    this.to = this.name && {name: this.name};
    this.children = children ? children.map(child => new NavigationRoute(child, this)) : null;
  }
}



export class NavigationRoutes extends NavigationRoute {
  constructor(routerRoutes, settings) {
    const convertedRouterRoutes = convertRouterRoutesToTree(routerRoutes, settings);
    super(convertedRouterRoutes);
  }
}



export default NavigationRoutes;