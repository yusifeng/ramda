import _curry2 from './internal/_curry2.js';
import _isArray from './internal/_isArray.js';
import _isObject from './internal/_isObject.js';


/**
 * 递归地对 `object` 的属性进行变换，变换方式由 `transformation` 函数定义。所有非原始类型属性都通过引用来复制。
 *
 * 如果某个 `transformation` 函数对应的键在被变换的 `object` 中不存在，那么该方法将不会执行。
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      const transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
var evolve = _curry2(function evolve(transformations, object) {
  if (!_isObject(object) && !_isArray(object)) {
    return object;
  }
  var result = object instanceof Array ? [] : {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function'
      ? transformation(object[key])
      : transformation && type === 'object'
        ? evolve(transformation, object[key])
        : object[key];
  }
  return result;
});
export default evolve;
