var fs = require('fs');

module.exports = function(app, io){
  console.log("main module initialized");


  function init(){

  };



  /**
  * Socket.IO events
  */
  io.on("connection", function(socket){

    /*
      When a client disconnects from the server, the event "disconnect" is automatically
      captured by the server. It will then emit an event called "userDisconnected" to
      all participants with the id of the client that disconnected
    */
    socket.on("disconnect", function() {
      // participants = _.without(participants,_.findWhere(participants, {id: socket.id}));
      // io.sockets.emit("userDisconnected", {id: socket.id, sender:"system"});
    });

    socket.on('playVideo', function(data){
      io.sockets.emit('playVideo', data);
    });

  });

  init();
};
