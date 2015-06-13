import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise((resolve) => {
      setTimeout(resolve, 40000);
      // resolve();
    });
  }
});
