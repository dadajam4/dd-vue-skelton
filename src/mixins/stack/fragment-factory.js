const getNewActivatorId = () => {
  return new Date().getTime().toString(16)  + Math.floor(1000 * Math.random()).toString(16);
}



export default function stackFragmentFactory(type) {
  return {
    name: `vt@${type}-fragment`,

    functional: true,

    render(h, {parent, children, slots}) {
      const $slots = slots();
      // const $activator = $slots.activator && $slots.activator[0];
      // const $content = $slots.default && $slots.default[0];
      // if ($activator && $content && $content.componentOptions) {
      //   $content.componentOptions.propsData = Object.assign({
      //     activator: $activator,
      //   }, $content.componentOptions.propsData);
      // }

      const $content = children.find(child => child.componentOptions && child.componentOptions.tag === `vt@${type}`);
      const $activator = children.find(child => child !== $content);

      if ($activator) {
        const activatorId = getNewActivatorId();
        $activator.data = $activator.data || {};
        $activator.data.attrs = $activator.data.attrs || {};
        $activator.data.attrs['data-dd-activator-id'] = activatorId;
        $content.componentOptions.propsData = Object.assign({
          activator: `[data-dd-activator-id="${activatorId}"]`,
        }, $content.componentOptions.propsData);
      }

      return children;
    },
  }
}