import _curry2 from './internal/_curry2.js';
import _dispatchable from './internal/_dispatchable.js';
import _dropLast from './internal/_dropLast.js';
import _xdropLast from './internal/_xdropLast.js';


/**
 * 删除 "list" 末尾的 `n` 个元素。
 *
 * 若在列表位置中给出 transfomer，则用作 transducer 。
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
var dropLast = _curry2(_dispatchable([], _xdropLast, _dropLast));
export default dropLast;
