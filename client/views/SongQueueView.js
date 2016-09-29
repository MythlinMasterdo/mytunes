// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.model.on('update', function() {
      console.log('beer');
    });
  },

  render: function() {
    return this.$el;
  }

});
