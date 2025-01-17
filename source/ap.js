import _concat from './internal/_concat.js';
import _curry2 from './internal/_curry2.js';
import _reduce from './internal/_reduce.js';
import map from './map.js';


/**
 * ap 将函数列表作用于值列表上。
 *
 * 若第二个参数自身存在 `ap` 方法，则调用自身的 `ap` 方法。柯里化函数也可以作为 applicative。
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (r -> a -> b) -> (r -> a) -> (r -> b)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 *      // R.ap can also be used as S combinator
 *      // when only two functions are passed
 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
var ap = _curry2(function ap(applyF, applyX) {
  return (
    typeof applyX['fantasy-land/ap'] === 'function'
      ? applyX['fantasy-land/ap'](applyF)
      : typeof applyF.ap === 'function'
        ? applyF.ap(applyX)
        : typeof applyF === 'function'
          ? function(x) { return applyF(x)(applyX(x)); }
          : _reduce(function(acc, f) { return _concat(acc, map(f, applyX)); }, [], applyF)
  );
});
export default ap;
