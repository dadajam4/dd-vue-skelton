import elementResizeEvent from 'element-resize-event';



const IS_BROWSER = typeof document !== 'undefined';



function inserted(el, binding) {
  if (!IS_BROWSER) return;

  let cb = binding.value;
  // let debounce = 200;

  if (typeof binding.value !== 'function') {
    cb = binding.value.value;
    // debounce = binding.value.debounce;
  }

  // let debounceTimeout = setTimeout(cb, debounce);
  // const onResize = () => {
  //   clearTimeout(debounceTimeout);
  //   debounceTimeout = setTimeout(cb, debounce);
  // }

  // window.addEventListener('resize', onResize, { passive: true });
  // el._onResize = onResize;

  // onResize();

  el._onResize = cb;
  elementResizeEvent(el, e => {
    cb(e);
  });
}

function unbind(el, binding) {
  if (!IS_BROWSER) return;
  elementResizeEvent.unbind(el, el._onResize);
  // window.removeEventListener('resize', el._onResize);
}

export default {
  name: 'resize',
  inserted,
  unbind,
}