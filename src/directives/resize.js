import elementResizeEvent from 'element-resize-event';



const IS_BROWSER = typeof document !== 'undefined';



function inserted(el, binding) {
  if (!IS_BROWSER) return;

  let cb = binding.value;

  if (typeof binding.value !== 'function') {
    cb = binding.value.value;
  }

  el._onResize = e => { cb(e) }
  elementResizeEvent(el, el._onResize);
}

function unbind(el, binding) {
  if (!IS_BROWSER) return;

  // element-resize-event が正常に動作しない事があるので実装で対応
  if (
    el.__resizeTrigger__
    && el.__resizeTrigger__.contentDocument
    && el.__resizeTrigger__.contentDocument.defaultView
  ) {
    elementResizeEvent.unbind(el, el._onResize);
  }
}

export default {
  name: 'resize',
  inserted,
  unbind,
}