import _curry2 from './internal/_curry2.js';
import _dispatchable from './internal/_dispatchable.js';
import _xdropRepeatsWith from './internal/_xdropRepeatsWith.js';
import last from './last.js';


/**
 * 返回一个没有连续重复元素的 list。首个参数提供的 `predicate` 用于检测 list 中相邻的两个元素是否相等。一系列相等元素中的首个元素会被保留。
 *
 * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      const l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
var dropRepeatsWith = _curry2(_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(last(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));
export default dropRepeatsWith;
