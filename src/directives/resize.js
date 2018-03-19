import elementResizeEvent from 'element-resize-event';



const IS_BROWSER = typeof document !== 'undefined';
const MIN_DEBOUNCE_WHEN_MULTI_PROP = 50;



const setupValues = value => {
  value = typeof value === 'function' ? {
    value: value,
  } : value;

  return Object.assign({
    window: false,
    element: true,
    debounce: 0,
    debounceTimerId: null,
  }, value);
}

function inserted(el, binding) {
  if (!IS_BROWSER || !binding.value) return;
  const bindingValues = setupValues(binding.value);
  const options = binding.options || { passive: true };

  if (bindingValues.window && bindingValues.element) {
    bindingValues.debounceTimerId = Math.max(bindingValues.debounceTimerId, MIN_DEBOUNCE_WHEN_MULTI_PROP);
  }
  const cb = bindingValues.value;
  const callback = bindingValues.debounce === 0 ? e => cb(e) : e => {
    if (bindingValues.debounceTimerId !== null) clearTimeout(bindingValues.debounceTimerId);
    bindingValues.debounceTimerId = setTimeout(() => cb(e), bindingValues.debounce);
  }

  el._onResize = {
    bindingValues,
    callback,
    options,
  };

  if (bindingValues.element) elementResizeEvent(el, callback);
  if (bindingValues.window) window.addEventListener('resize', callback, options);
}

function unbind(el, binding) {
  if (!IS_BROWSER) return;
  const { bindingValues, callback, options } = el._onResize;

  if (bindingValues.debounceTimerId !== null) clearTimeout(bindingValues.debounceTimerId);

  if (bindingValues.element) {

    // element-resize-event が正常に動作しない事があるので実装で対応
    if (
      el.__resizeTrigger__
      && el.__resizeTrigger__.contentDocument
      && el.__resizeTrigger__.contentDocument.defaultView
    ) {
      elementResizeEvent.unbind(el, el._onResize);
    }
  }

  if (bindingValues.window) window.removeEventListener('resize', el._onResize, options);
}

export default {
  name: 'resize',
  inserted,
  unbind,
}