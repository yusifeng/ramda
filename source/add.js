import _curry2 from './internal/_curry2.js';


/**
 * 两数相加。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
var add = _curry2(function add(a, b) {
  return Number(a) + Number(b);
});
export default add;
