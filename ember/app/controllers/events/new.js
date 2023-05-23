import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { underscore } from '@ember/string';
const { keys } = Object;

export default Controller.extend({
  /**
   * @type {Services/Api}
   */
  api: service(),

  /**
   * @param {Object} model
   * @return {Object}
   */
  serialize(model) {
    model = { ...model };
    model.eventDate = new Date(model.eventDate).toISOString();

    return keys(model).reduce((obj, key) => {
      obj[underscore(key)] = model[key];
      return obj;
    }, {});
  },

  actions: {
    save(e) {
      e.preventDefault();

      let data = this.serialize(this.model);

      this.api.post('/events', data).then(response => {
        this.transitionToRoute('event', response.slug);
      });
    }
  }
});
