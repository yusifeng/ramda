import _curry3 from './internal/_curry3.js';

// `Identity` is a functor that holds a single value, where `map` simply
// transforms the held value with the provided function.
var Identity = function(x) {
  return {value: x, map: function(f) { return Identity(f(x)); }};
};


/**
 * 对数据结构中被 lens 聚焦的部分进行函数变换。
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.view, R.set, R.lens, R.lensIndex, R.lensProp, R.lensPath
 * @example
 *
 *      const headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
var over = _curry3(function over(lens, f, x) {
  // The value returned by the getter function is first transformed with `f`,
  // then set as the value of an `Identity`. This is then mapped over with the
  // setter function of the lens.
  return lens(function(y) { return Identity(f(y)); })(x).value;
});
export default over;
