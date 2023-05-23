import { typeOf } from '@ember/utils';
const { keys } = Object;

/**
 * Pass any transform function to perform transformations on an object's keys.
 * Used mostly in serialization/deserialization of API requests/responses.
 * The keys will be transformed recursively (even in arrays).
 *
 * Example:
 * ```js
 * response = replaceKeys(response, key => underscore(key));
 * ```
 *
 * @param  {Object|Array} obj
 * @param  {Function} transform The transform function (Example: `underscore`)
 * @return {Object|Array}
 */
export function replaceKeys(obj, transform) {
  let type = typeOf(obj);
  if (type !== 'object' && type !== 'array') {
    return obj;
  }
  if (type === 'array') {
    return obj.map(item => replaceKeys(item, transform));
  }
  return keys(obj).reduce((prev, key) => {
    let item = obj[key];
    prev[transform(key)] = replaceKeys(item, transform);
    return prev;
  }, {});
}
