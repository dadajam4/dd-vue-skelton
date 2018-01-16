import createSimpleFunctional from './createSimpleFunctional';
import directiveConfig from './directiveConfig';
import load from './load';
import addOnceEventListener from './addOnceEventListener';
import blurActiveElement from './blurActiveElement';
import createRange from './createRange';
import createJavaScriptTransition from './createJavaScriptTransition';
import createSimpleTransition from './createSimpleTransition';
import getObjectValueByPath from './getObjectValueByPath';
import getZIndex from './getZIndex';
import waitElementInsert from './waitElementInsert';
import locationHashChange from './locationHashChange';



/**
 * Checks if a function is callable.
 */
export const isCallable = (func) => typeof func === 'function';



/**
 * Converts an array-like object to array.
 * Simple polyfill for Array.from
 */
export const toArray = (arrayLike) => {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }

  const array = [];
  const length = arrayLike.length;
  for (let i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  return array;
}



export {
  createSimpleFunctional,
  directiveConfig,
  load,
  addOnceEventListener,
  blurActiveElement,
  createRange,
  createJavaScriptTransition,
  createSimpleTransition,
  getObjectValueByPath,
  getZIndex,
  waitElementInsert,
  locationHashChange,
}
