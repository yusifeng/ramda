import _curry1 from './internal/_curry1.js';
import nAry from './nAry.js';


/**
 * 将任意元（包括零元）函数封装成一元函数。任何额外的参数都不会传递给被封装的函数。
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (a -> b -> c -> ... -> z) -> (a -> z)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @see R.binary, R.nAry
 * @example
 *
 *      const takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      const takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
var unary = _curry1(function unary(fn) {
  return nAry(1, fn);
});
export default unary;
