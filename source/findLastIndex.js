import _curry2 from './internal/_curry2.js';
import _dispatchable from './internal/_dispatchable.js';
import _xfindLastIndex from './internal/_xfindLastIndex.js';


/**
 * 查找并返回 list 中最后一个满足 `predicate` 的元素的索引；如果未找到满足条件的元素，则返回 `-1` 。
 *
 * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce, R.lastIndexOf
 * @example
 *
 *      const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */
var findLastIndex = _curry2(_dispatchable([], _xfindLastIndex, function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));
export default findLastIndex;
