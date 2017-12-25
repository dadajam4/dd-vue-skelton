'use strict';



let windowIsLoaded = false;

const HAS_WINDOW = typeof window !== 'undefined';
const isIOS      = HAS_WINDOW ? /iP(hone|(o|a)d)/.test(navigator.userAgent) : false;
const iOSDelay   = 500;

const windowLoader = () => {
  return windowIsLoaded ? Promise.resolve() : new Promise(resolve => {
    windowLoader.listeners.push(resolve);
  });
}
windowLoader.HAS_WINDOW = HAS_WINDOW;
windowLoader.listeners = [];

HAS_WINDOW && window.addEventListener('load', () => {
  const delay = isIOS ? iOSDelay : 0;
  setTimeout(() => {
    windowIsLoaded = true;
    for (let listener of windowLoader.listeners) {
      listener();
    }
  }, delay);
});



export default windowLoader;