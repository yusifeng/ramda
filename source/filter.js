import _curry2 from './internal/_curry2.js';
import _dispatchable from './internal/_dispatchable.js';
import _filter from './internal/_filter.js';
import _isObject from './internal/_isObject.js';
import _reduce from './internal/_reduce.js';
import _xfilter from './internal/_xfilter.js';
import keys from './keys.js';


/**
 * 使用 `predicate` 遍历传入的 `Filterable`，返回满足 `predicate` 的所有元素的新的 `Filterable`。新 `Filterable` 与原先的类型相同。Filterable 类型包括 plain object 或者任何带有 filter 方法的类型，如 `Array` 。
 *
 * 若第二个参数自身存在 `filter` 方法，则调用自身的 `filter` 方法。
 *
 * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var filter = _curry2(_dispatchable(['fantasy-land/filter', 'filter'], _xfilter, function(pred, filterable) {
  return (
    _isObject(filterable) ?
      _reduce(function(acc, key) {
        if (pred(filterable[key])) {
          acc[key] = filterable[key];
        }
        return acc;
      }, {}, keys(filterable)) :
    // else
      _filter(pred, filterable)
  );
}));
export default filter;
