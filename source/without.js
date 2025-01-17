import _includes from './internal/_includes.js';
import _curry2 from './internal/_curry2.js';
import flip from './flip.js';
import reject from './reject.js';


/**
 * 求第二个列表中，未包含在第一个列表中的任一元素的集合。通过 [`R.equals`](#equals) 函数进行相等性判断。
 *
 * 若在列表位置中给出 transfomer，则用作 transducer 。
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference, R.remove
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
var without = _curry2(function(xs, list) {
  return reject(flip(_includes)(xs), list);
});
export default without;
