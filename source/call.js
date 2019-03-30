import curry from './curry';


/**
 * 提取第一个参数作为函数，其余参数作为刚提取的函数的参数，调用该函数并将结果返回。
 *
 * `R.call` 可以用作 [`R.converge`](#converge) 的 convergeing 函数：第一个分支函数生成函数，其余分支函数生成一系列值作为该函数的参数。（`R.converge` 第二个参数为一个分支函数列表）。
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      const indentN = R.pipe(R.repeat(' '),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      const format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
var call = curry(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
export default call;
