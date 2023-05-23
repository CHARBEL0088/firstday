import Service, { inject as service } from '@ember/service';
import { camelize } from '@ember/string';
import { replaceKeys } from 'lebtivity/utils/object';

export default Service.extend({
  /**
   * @type {Services/Ajax}
   */
  ajax: service(),

  /**
   * @param {String} action
   * @return {Promise}
   */
  request(action) {
    return this.ajax.request(action).then(resp =>
      replaceKeys(resp, key => camelize(key))
    );
  },

  /**
   * @param  {String} action
   * @param  {Object} params
   * @return {Promise}
   */
  post(action, params = {}, options = {}) {
    options = {
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      data: params,
      ...options
    };

    options.data = JSON.stringify(options.data);
    return this.ajax.post(action, options);
  }
});
