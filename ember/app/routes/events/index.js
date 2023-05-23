import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  /**
   * @type {Services/Api}
   */
  api: service(),

  /**
   * @return {Promise<Array<Object>>}
   */
  model() {
    return this.api.request('/events');
  }
});
