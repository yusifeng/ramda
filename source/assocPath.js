import _curry3 from './internal/_curry3.js';
import _has from './internal/_has.js';
import _isInteger from './internal/_isInteger.js';
import _assoc from './internal/_assoc.js';
import isNil from './isNil.js';

/**
 * 浅复制对象，设置或覆盖即将创建的给定路径所需的节点，并将特定值放在该路径的末端。
 *
 * 注意，这也会将 prototype 属性复制到新对象上。所有 `non-primitive` 属性都通过引用复制。
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
var assocPath = _curry3(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = (!isNil(obj) && _has(idx, obj)) ? obj[idx] : _isInteger(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  return _assoc(idx, val, obj);
});
export default assocPath;
