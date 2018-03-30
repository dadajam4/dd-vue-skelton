import NavigationRoutes from './NavigationRoutes';



export default {
  name: 'vt@route-navigator',

  props: {
    routes: {
      type: Array,
      default() { return this.$router.options.routes },
    },
    settings: {
      type: Array,
      default: () => [],
    },
    indexIgnore: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    computedSettings() {
      const settings = this.settings.slice();
      if (this.indexIgnore) {
        settings.unshift({match: '/', ignore: true});
      }
      return settings;
    },
    navigationRoutes() { return new NavigationRoutes(this.routes, this.computedSettings) },
  },

  render(h) {
    const routes = this.navigationRoutes;
    const $children = [];

    const createChildren = children => {
      const $children = [];
      for (let child of children) {
        if (child.customMeta.ignore) continue;

        const isActive = this.$route.name === child.name;

        if (child.children) {
          const $accordionTitle = h('vt@accordion-title', {
            class: {
              'vc@text-color--primary': isActive,
            },
            props: {
              icon: child.icon,
              to: child.to,
              activeIconClass: 'vc@text-color--primary',
              // linkActiveClass: 'vc@text-color--primary',
              // contentClass: isActive && 'vc@text-color--primary',
              dense: true,
            },
          }, child.capitalizedLabel);

          const $accordion = h('vt@accordion', {
            props: {matchRoute: child.path},
            key: child.path,
          }, [$accordionTitle, createChildren(child.children)]);

          $children.push($accordion);
        } else {
          const $icon = child.icon && [h('vt@icon', null, child.icon)];
          const $action = h('vt@tile-action', null, $icon);
          const $content = h('vt@tile-content', null, [h('vt@tile-title', null, child.capitalizedLabel)]);
          const $tile = h('vt@tile', {
            class: {
              'vc@text-color--primary': isActive,
            },
            props: {to: child.to, dense: true},
            key: child.path,
          }, [$action, $content]);
          $children.push($tile);

          if (isActive) {
            $children.push(h('vt@anchor-navi'));
          }
        }
      }

      const $group = h('vt@accordion-group', {props: {tag: 'nav'}}, $children);
      return $group;
    }
    return createChildren(routes.children);
  },
}