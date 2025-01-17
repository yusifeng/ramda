import _curry1 from './internal/_curry1.js';
import curryN from './curryN.js';


/**
 * 对函数进行柯里化。柯里化函数与其他语言中的柯里化函数相比，有两个非常好的特性：
 *
 * 1. 参数不需要一次只传入一个。如果 `f` 是三元函数，`g` 是 `R.curry(f)` ，则下列写法是等价的：
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * 2. 占位符值 [`R.__`](#__) 可用于标记暂未传入参数的位置。允许部分应用于任何参数组合，而无需关心它们的位置和顺序。假设 `g` 定义如前所示，`_` 代表 [`R.__`](#__) ，则下列写法是等价的：
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN, R.partial
 * @example
 *
 *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      const curriedAddFourNumbers = R.curry(addFourNumbers);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */
var curry = _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});
export default curry;
