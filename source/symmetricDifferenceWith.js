import _curry3 from './internal/_curry3';
import concat from './concat';
import differenceWith from './differenceWith';


/**
 * 求对称差集。所有不属于两列表交集元素的集合。交集的元素由条件函数的返回值决定。
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred 判断两个元素是否相等的条件函数
 * @param {Array} list1 第1个列表
 * @param {Array} list2 第2个列表
 * @return {Array} 元素仅在list1或list2中出现的列表
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
var symmetricDifferenceWith = _curry3(function symmetricDifferenceWith(pred, list1, list2) {
  return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
});
export default symmetricDifferenceWith;