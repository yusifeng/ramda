import _curry2 from './internal/_curry2.js';


// `Const` is a functor that effectively ignores the function given to `map`.
var Const = function(x) {
  return {value: x, 'fantasy-land/map': function() { return this; }};
};

/**
 * 返回数据结构中，lens 聚焦的部分。lens 的焦点决定了数据结构中的哪部分是可见的。
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.set, R.over, R.lens, R.lensIndex, R.lensProp, R.lensPath
 * @example
 *
 *      const xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
var view = _curry2(function view(lens, x) {
  // Using `Const` effectively ignores the setter function of the `lens`,
  // leaving the value returned by the getter function unmodified.
  return lens(Const)(x).value;
});
export default view;
