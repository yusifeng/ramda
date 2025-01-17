import _curry2 from './internal/_curry2.js';
import _indexOf from './internal/_indexOf.js';
import _isArray from './internal/_isArray.js';


/**
 * 返回给定元素在数组中首次出现时的索引值，如果数组中没有该元素，则返回 `-1`。通过 [`R.equals`](#equals) 函数进行相等性判断。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf, R.findIndex
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
var indexOf = _curry2(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !_isArray(xs) ?
    xs.indexOf(target) :
    _indexOf(xs, target, 0);
});
export default indexOf;
