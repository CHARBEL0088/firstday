import Route from '@ember/routing/route';

export default Route.extend({
  /**
   * @return {Object}
   */
  model() {
    return {
      name: '',
      description: '',
      location: '',
      eventDate: null,
      startTime: null,
      endTime: null
    };
  }
});
