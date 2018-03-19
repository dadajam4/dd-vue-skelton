export default function createActivatorWithContent(h, { children, data, slots }, tag) {
  const $children = [],
        $contentChildren = [];

  console.warn(slots());

  let $slotActivator;
  for (let child of children) {
    console.warn(child.data);
    if (child.data && child.data.slot === 'activator') {
      $slotActivator = child;
    } else {
      // if (child.data && child.data.slot) {
      //   child.data.attrs = child.data.attrs || {};
      //   child.data.attrs.slot = child.data.slot;
      //   delete child.data.slot;
      //   console.warn(child.data.attrs.slot, child);
      // }
      $contentChildren.push(child);
    }
  }

  if ($slotActivator) {
    $children.push($slotActivator);
    data.props.slotActivatorVNode = $slotActivator;
  }

  // // resolve slots
  // for (let child of $contentChildren) {
  //   if (child.data )
  //   console.warn(child);
  // }

  // data.scopedSlots = {
  //   hoge: hoge =>
  // };

  const $menu = h(tag, data, $contentChildren);
  $children.push($menu);

  return $children;
}