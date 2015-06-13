import Ember from 'ember';
import List from 'moe/models/list';

export default Ember.Object.extend({
  init: function() {
    this.randomize();
  },

  randomIndex: function() {
    let min = 0;
    let max = List.length - 1;
    return Math.floor(Math.random() * (max - min)) + min;
  },

  randomize: function() {
    let index = this.randomIndex();
    this.set('file', List[index]);
  },

  preload: function(resolve) {
    let self = this,
        req = new XMLHttpRequest();

    req.onload = function() {
      resolve(self);
    }

    req.open("GET", this.get('url'), true);
    req.send();
  },

  url: function() {
    return 'moe/' + this.get('file');
  }.property('file')
});
