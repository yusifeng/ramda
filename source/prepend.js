import _concat from './internal/_concat.js';
import _curry2 from './internal/_curry2.js';


/**
 * 在列表头部之前拼接一个元素。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
var prepend = _curry2(function prepend(el, list) {
  return _concat([el], list);
});
export default prepend;
