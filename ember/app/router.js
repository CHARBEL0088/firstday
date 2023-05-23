import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('events', { path: '/', resetNamespace: true }, function() {
    this.route('new', { path: 'events/new' });
    this.route('edit', { path: 'events/edit/:id' });
  });
  this.route('event', { path: 'event/:slug' });
  this.route('hourglass');
});

export default Router;
