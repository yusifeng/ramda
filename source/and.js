import _curry2 from './internal/_curry2.js';


/**
 * 如果两个参数都是 `true`，则返回 `true`；否则返回 `false`。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any}
 * @see R.both, R.or
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
var and = _curry2(function and(a, b) {
  return a && b;
});
export default and;
