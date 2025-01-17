import _concat from './internal/_concat.js';
import _curry2 from './internal/_curry2.js';
import compose from './compose.js';
import uniq from './uniq.js';


/**
 * 集合并运算，合并两个列表为新列表（新列表中无重复元素）。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
var union = _curry2(compose(uniq, _concat));
export default union;
