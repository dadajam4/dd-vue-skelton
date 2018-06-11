const getNewActivatorId = () => {
  return new Date().getTime().toString(16)  + Math.floor(1000 * Math.random()).toString(16);
}



export default function stackFragmentFactory(type, includes = []) {
  includes = Array.isArray(includes) ? includes : [includes];
  includes.unshift(`vt@${type}`);

  return {
    name: `vt@${type}-fragment`,

    functional: true,

    render(h, {parent, children, slots}) {
      // const $slots = slots();
      // const $activator = $slots.activator && $slots.activator[0];
      // const $content = $slots.default && $slots.default[0];
      // if ($activator && $content && $content.componentOptions) {
      //   $content.componentOptions.propsData = Object.assign({
      //     activator: $activator,
      //   }, $content.componentOptions.propsData);
      // }

      if (typeof window === 'undefined') return [];

      const $content = children.find(child => child.componentOptions && includes.includes(child.componentOptions.tag));
      let $activator = children.find(child => child !== $content);

      if ($activator) {
        if (typeof window !== 'undefined') {
          const activatorId = 'data-dd-activator-' + getNewActivatorId();
          $activator.data = $activator.data || {};
          $activator.data.attrs = $activator.data.attrs || {};
          $activator.data.attrs[activatorId] = '';
          $content.componentOptions.propsData = Object.assign({
            activator: `[${activatorId}]`,
          }, $content.componentOptions.propsData);
        }
      }

      return children;
    },
  }
}
