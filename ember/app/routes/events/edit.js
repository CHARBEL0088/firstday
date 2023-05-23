import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  /**
   * @type {Services/Api}
   */
  api: service(),

  /**
   * @param {Object} params The parameters extracted from the URL.
   * @return {Promise<Object>}
   */
  model(params) {
    return this.api.request(`/events/${params.id}`);
  }
});
