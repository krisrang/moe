import Ember from 'ember';
import Giflist from 'moe/models/giflist';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise((resolve) => {
      Giflist.create().preload(resolve);
    });
  },

  actions: {
    newMoe: function() {
      this.refresh();
    }
  }
});
