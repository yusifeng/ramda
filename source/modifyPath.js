import _curry3 from './internal/_curry3.js';
import _isArray from './internal/_isArray.js';
import _isObject from './internal/_isObject.js';
import _has from './internal/_has.js';
import _assoc from './internal/_assoc.js';
import _modify from './internal/_modify.js';


/**
 *  将 `fn` 作用于给定 path 的对象，并返回一个新的浅拷贝对象。
 *
 * 如果对象上没有对应的属性，那个这个函数不会被调用，且对象不会被改变。
 * 所以的非基础类型的是通过引用拷贝到新的对象上的。
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Object
 * @sig [Idx] -> (v -> v) -> {k: v} -> {k: v}
 * @param {Array} path The path to be modified.
 * @param {Function} fn The function to apply to the path.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      const person = {name: 'James', address: { zipCode: '90216' }};
 *      R.modifyPath(['address', 'zipCode'], R.reverse, person); //=> {name: 'James', address: { zipCode: '61209' }}
 *
 *      // Can handle arrays too
 *      const person = {name: 'James', addresses: [{ zipCode: '90216' }]};
 *      R.modifyPath(['addresses', 0, 'zipCode'], R.reverse, person); //=> {name: 'James', addresses: [{ zipCode: '61209' }]}
 */
var modifyPath = _curry3(function modifyPath(path, fn, object) {
  if ((!_isObject(object) && !_isArray(object)) || path.length === 0) {
    return object;
  }

  var idx = path[0];
  if (!_has(idx, object)) {
    return object;
  }

  if (path.length === 1) {
    return _modify(idx, fn, object);
  }

  var val = modifyPath(Array.prototype.slice.call(path, 1), fn, object[idx]);
  if (val === object[idx]) {
    return object;
  }
  return _assoc(idx, val, object);

});
export default modifyPath;
