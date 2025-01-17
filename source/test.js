import _cloneRegExp from './internal/_cloneRegExp.js';
import _curry2 from './internal/_curry2.js';
import _isRegExp from './internal/_isRegExp.js';
import toString from './toString.js';


/**
 * 检测字符串是否匹配给定的正则表达式。
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
var test = _curry2(function test(pattern, str) {
  if (!_isRegExp(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString(pattern));
  }
  return _cloneRegExp(pattern).test(str);
});
export default test;
