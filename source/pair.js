import _curry2 from './internal/_curry2.js';


/**
 * 接收两个参数，`fst` 和 `snd`，返回数组 `[fst, snd]`。
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
var pair = _curry2(function pair(fst, snd) { return [fst, snd]; });
export default pair;
