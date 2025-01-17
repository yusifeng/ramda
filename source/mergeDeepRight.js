import _curry2 from './internal/_curry2.js';
import mergeDeepWithKey from './mergeDeepWithKey.js';


/**
 * 合并两个对象的自身属性（不包括 prototype 属性）。如果某个 key 在两个对象中都存在：
 *
 * - 并且两个值都是对象，则继续递归合并这两个值。
 * - 否则，采用第二个对象的值。
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
var mergeDeepRight = _curry2(function mergeDeepRight(lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
export default mergeDeepRight;
