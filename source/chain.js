import _curry2 from './internal/_curry2';
import _dispatchable from './internal/_dispatchable';
import _makeFlat from './internal/_makeFlat';
import _xchain from './internal/_xchain';
import map from './map';


/**
 * `chain` 将函数映射到列表中每个元素，并将结果连接起来。 `chain` 在一些库中也称为 `flatMap`（先 map 再 flatten ）。
 *
 * 若第二个参数存在 `chain` 方法，则调用其自身的 `chain`方法。该参数需符合 [FantasyLand Chain 规范](https://github.com/fantasyland/fantasy-land#chain)。
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
var chain = _curry2(_dispatchable(['fantasy-land/chain', 'chain'], _xchain, function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function(x) { return fn(monad(x))(x); };
  }
  return _makeFlat(false)(map(fn, monad));
}));
export default chain;
