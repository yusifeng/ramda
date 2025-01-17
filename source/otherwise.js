import _curry2 from './internal/_curry2.js';
import _assertPromise from './internal/_assertPromise.js';


/**
 * 将 onFailure 函数应用于一个失败 Promise 的内部值，并将计算结果放入新的 Promise 中返回。这对于处理函数组合内的 rejected promises 很有用。
 *
 * 相当于 `Promise` 的 `catch`。
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig (e -> b) -> (Promise e a) -> (Promise e b)
 * @sig (e -> (Promise f b)) -> (Promise e a) -> (Promise f b)
 * @param {Function} onFailure The function to apply. Can return a value or a promise of a value.
 * @param {Promise} p
 * @return {Promise} The result of calling `p.then(null, onFailure)`
 * @see R.andThen
 * @example
 *
 *      const failedFetch = id => Promise.reject('bad ID');
 *      const useDefault = () => ({ firstName: 'Bob', lastName: 'Loblaw' });
 *
 *      //recoverFromFailure :: String -> Promise ({ firstName, lastName })
 *      const recoverFromFailure = R.pipe(
 *        failedFetch,
 *        R.otherwise(useDefault),
 *        R.andThen(R.pick(['firstName', 'lastName'])),
 *      );
 *      recoverFromFailure(12345).then(console.log);
 */
var otherwise = _curry2(function otherwise(f, p) {
  _assertPromise('otherwise', p);

  return p.then(null, f);
});
export default otherwise;
