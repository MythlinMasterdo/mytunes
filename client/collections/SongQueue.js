// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,



  initialize: function() {
    this.on('add', function() {
      debugger;
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      //Dequeue
      if (this.length > 1) {
        this.playFirst();
      }
      this.shift();
      //playFirst
    });

    this.on('dequeue', function(song) {
      this.remove(song.cid);
    }, this);
  },


  playFirst: function() {
    debugger;
    this.at(0).play();
  }

});