// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,



  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      //Dequeue
      this.trigger('dequeue', function() {
        this.model[0];
      });
      if (this.length !== 1) {
        this.playFirst();
      }
      //playFirst
    });

    this.on('dequeue', function(song) {
      // debugger;
      this.remove(song.cid);
      // this.models.shift();
    }, this);
    console.log('remove', this.model[0]);
  },


  playFirst: function() {

  }

});