import invoker from './invoker';


/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str 待转换的字符串
 * @return {String} `str`的大写字符串
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
var toUpper = invoker(0, 'toUpperCase');
export default toUpper;
