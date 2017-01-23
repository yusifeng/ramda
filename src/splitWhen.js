var _curry2 = require('./internal/_curry2');


/**
 * 接收一个列表，和一个 predicate ，返回一对列表，且有以下特征：
 *
 *  - 两个输出的 list 拼接起来与输入的 list 相同。
 *  - 第一个输出的 list 中的元素都不满足 predicate；
 *  - 如果第二个输出的 list 是非空的，则它的第一个元素满足 predicate。
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
module.exports = _curry2(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];

  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }

  return [prefix, Array.prototype.slice.call(list, idx)];
});
