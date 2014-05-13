function init() {

  // var ip = java.net.getLocalhost.getIpAddress();
  // console.log('ip', ip);


  var serverBaseUrl = document.domain;
  var socket = io.connect(serverBaseUrl);
  var sessionId = '';

  /**
  * Events
  */
  /* sockets */
  socket.on('connect', onSocketConnect);
  // socket.on('incomingLine', onIncomingLine);
  socket.on('error', onSocketError);

  /* dom */
  $('.carre').on('click', onCLickWindow);

  /**
  * handlers
  */
  function onCLickWindow(event) {
    event.preventDefault();
    console.log('onCLickWindow', event);
    var match = $(this).attr("class").match(/carre-(\d+)/);
    console.log('match', match);

    // socket.emit('newUser', {id: sessionId, name: $('#name').val()});
    socket.emit('playVideo', {id:parseInt(match[1])});

    // return false;
  };

  /* sockets */
  function onSocketConnect() {
    sessionId = socket.socket.sessionid;
    console.log('Connected ' + sessionId);
    // socket.emit('newUser', {id: sessionId, name: $('#name').val()});
  };

  function onSocketError(reason) {
    console.log('Unable to connect to server', reason);
  };



};

$(document).on('ready', init);