export default function stackFragmentFactory(type) {
  return {
    name: `vt@${type}-fragment`,

    functional: true,

    render(h, {children, slots}) {
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
        $content.componentOptions.propsData = Object.assign({
          activator: $activator,
        }, $content.componentOptions.propsData);
      }

      return children;
    },
  }
}