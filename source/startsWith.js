import _curry2 from './internal/_curry2.js';
import equals from './equals.js';
import take from './take.js';

/**
 * 检查列表是否以给定的值开头。
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> [a] -> Boolean
 * @sig String -> String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @see R.endsWith
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var startsWith = _curry2(function(prefix, list) {
  return equals(take(prefix.length, list), prefix);
});
export default startsWith;
