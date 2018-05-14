import createSimpleFunctional from './createSimpleFunctional';
import createActivatorWithContent from './createActivatorWithContent';
import mergeComponentOptions from './mergeComponentOptions';
import directiveConfig from './directiveConfig';
import load from './load';
import addOnceEventListener from './addOnceEventListener';
import blurActiveElement from './blurActiveElement';
import createRange from './createRange';
import createJavaScriptTransition from './createJavaScriptTransition';
import createSimpleTransition from './createSimpleTransition';
import findParentByName from './findParentByName';
import getObjectValueByPath from './getObjectValueByPath';
import getZIndex from './getZIndex';
import waitElementInsert from './waitElementInsert';
import locationHashChange from './locationHashChange';
import convertRouterRoutesToTree from './convertRouterRoutesToTree';
import createDateFormatDefine from './createDateFormatDefine';
import { getClientLanguage, getClientAcceptingLanguages } from './clientLanguage';



/**
 * Checks if a function is callable.
 */
export const isCallable = func => typeof func === 'function';



/**
 * Converts an array-like object to array.
 * Simple polyfill for Array.from
 */
export const toArray = arrayLike => {
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


/**
 * '100px' とか '100%' とか 100 とか 0 の数値に利用できる値以外はデフォルト値で返却
 * 単純な数値であった場合はnumberにキャストする
 * 、、けどパフォーマンス優先で変な単位とかは考慮しない
 */
export const sizeValueToDefaulted = (val, defaultValue = null) => {
  if (typeof val === number) return val;
  if (typeof val === 'string' && isFinite(val)) return parseFloat(val);
  return defaultValue;
}

/**
 * propsで渡されたpx用の値をnumberにキャストして返却する
 */
export const numberedPxValue = (val, defaultValue = null) => {
  return (!isFinite(val) || val === null) ? defaultValue : typeof val === 'string' ? parseFloat(val) : val;
}

/**
 * '100px' とか '100vh' とかを {value: 100, unit: 'vh'} とかにして返却する
 * 100 みたいな数値の場合はpxと判断する
 * 変換できなければ defaultValue を返却する
 */
export const splitedUnitableValue = (val, defaultValue = null) => {
  if (typeof val === 'number') return {value: val, unit: 'px'};
  if (typeof val !== 'string') return defaultValue;
  const matched = val.match(/^\-?([\d\.]+)([a-z%]+)$/);
  if (!matched || !matched[2]) return defaultValue;
  return {value: parseFloat(matched[1]), unit: matched[2]};
}

/**
 * '100%' とか '100vh' とかな相対的な値をpxに計算して返却する
 * パフォーマンス考慮しメソッド冒頭でpxに解決できるか試してokだったらすぐ返却する
 * '%'に対応させる場合には parentDefineの指定が必要
 *   {prop: ['width' || 'height'], el: 任意, width: 任意, height: 任意}
 *   elの指定があれば優先的に利用する
 * 'vw, vh'はviewportサイズを自動で参照する
 */
export const pixcelatedValue = (val, parentDefine = {}, defaultValue = null) => {
  const numberedValue = numberedPxValue(val, defaultValue);
  if (numberedValue !== null) return numberedValue;

  const parsed = splitedUnitableValue(val, defaultValue);
  if (parsed === defaultValue) return defaultValue;

  let parentSize;

  if (parsed.unit === 'px') {
    return parsed.value;
  } else if (parsed.unit === 'vw') {
    parentSize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  } else if (parsed.unit === 'vh') {
    parentSize = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  } else if (parsed.unit === '%') {
    const parentDimension = parentDefine.el ? parentDefine.el.getBoundingClientRect() : parentDefine;
    parentSize = parentDimension[parentDefine.prop];
  } else {
    return defaultValue;
  }
  if (typeof parentSize !== 'number') return defaultValue;
  return parentSize * parsed.value / 100;
}

export const addClass = ($el, classNames) => {
  const classes = ($el.getAttribute('class') || '').replace(/\s+/, ' ').split(' ');
  classes.push(classNames);
  $el.setAttribute('class', classes.join(' ').trim());
}

export const removeClass = ($el, classNames) => {
  const removes = Array.isArray(classNames) ? classNames : classNames.split(' ');
  const classes = ($el.getAttribute('class') || '').replace(/\s+/, ' ').split(' ');
  for (let className of removes) {
    const index = classes.indexOf(className);
    if (index !== -1) classes.splice(index, 1);
  }
  $el.setAttribute('class', classes.join(' ').trim());
}

export const resolveNuxtSrcPath = (src = '') => {
  const resolveMatch = src.match(/^([~@]+)/);
  if (!resolveMatch) return src;

  const baseAlias = resolveMatch[1];
  const targetPath = src.replace(new RegExp('^' + baseAlias + '\/?'), '');
  const extWithDot = targetPath.match(/\.(png|jpe?g|gif|svg)$/)[0];
  const extRemovedPath = targetPath.replace(/\.(png|jpe?g|gif|svg)$/, '');
  let resolvedSrc;

  if (extWithDot === '.png') {
    resolvedSrc = require('~/' + extRemovedPath + '.png');
  } else if (extWithDot === '.jpg') {
    resolvedSrc = require('~/' + extRemovedPath + '.jpg');
  } else if (extWithDot === '.jpeg') {
    resolvedSrc = require('~/' + extRemovedPath + '.jpeg');
  } else if (extWithDot === '.gif') {
    resolvedSrc = require('~/' + extRemovedPath + '.gif');
  } else if (extWithDot === '.svg') {
    resolvedSrc = require('~/' + extRemovedPath + '.svg');
  }

  return resolvedSrc;
}


export {
  createSimpleFunctional,
  createActivatorWithContent,
  mergeComponentOptions,
  directiveConfig,
  load,
  addOnceEventListener,
  blurActiveElement,
  createRange,
  createJavaScriptTransition,
  createSimpleTransition,
  getObjectValueByPath,
  getZIndex,
  findParentByName,
  waitElementInsert,
  locationHashChange,
  convertRouterRoutesToTree,
  createDateFormatDefine,
  getClientLanguage,
  getClientAcceptingLanguages,
}
