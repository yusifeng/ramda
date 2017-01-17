var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');


/**
 * 对函数进行柯里化。柯里化函数有两个很好的特性：
 *
 * 首先，参数不需要一次只传入一个。如果 `f` 是三元函数，`g` 是 `R.curry(f)` ，则下列写法是等价的：
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * 其次，特殊的占位符值 `R.__` 可用于标记暂未传入的参数位置，允许部分应用于任何参数组合，而无需关心它们的位置和顺序。 假设 `g` 定义如前所示，且 `_` 代表 `R .__`，则下列写法是等价的：
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
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});
