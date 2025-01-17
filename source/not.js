import _curry1 from './internal/_curry1.js';


/**
 * 逻辑非运算。

 * 当传入参数为 false-y 值时，返回 `true`；truth-y 值时，返回 `false`。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
var not = _curry1(function not(a) {
  return !a;
});
export default not;
