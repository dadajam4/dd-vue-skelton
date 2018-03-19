export default {
  name: 'vt@app-stack-fragment',

  functional: true,

  render(h, {children, data, injections, listeners, parent, props, slots}) {
    let $activator, $defaults = [];
    for (let child of children) {
      if (child.data && child.data.slot === 'activator') {
        $activator = child;
      } else {
        $defaults.push(child);
      }
    }
    // console.log($activator, $children);
    // const $slots = slots();

    // const $activator = $slots.activator && $slots.activator[0];
    const $stack = h('vt@app-stack', data, $defaults);
    const $children = [$stack];
    console.warn($children);
    if ($activator) $children.unshift($activator);
    return $children;
  },
}
