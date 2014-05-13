function init() {
  console.log('Video init');

  var serverBaseUrl = document.domain;
  var socket = io.connect(serverBaseUrl);
  var sessionId = '';

  /**
  * Events
  */
  /* sockets */
  socket.on('connect', onSocketConnect);
  socket.on('playVideo', onSocketPlayVideo);
  socket.on('error', onSocketError);

  var video = document.getElementById('videoplayer');
  var timeset = [
    {start:5, end:15},
    {start:18, end:28},
    {start:29, end:39},
    {start:48, end:58},
    {start:72, end:82},
    {start:88, end:98}
  ];
  var current_video_time = {start:0, end:0};

  /* dom */
  //  $('.carre').on('click', onCLickWindow);

  /**
  * handlers
  */

  /**
  * sockets
  */
  function onSocketConnect() {
    sessionId = socket.socket.sessionid;
    console.log('Connected ' + sessionId);
    // socket.emit('newUser', {id: sessionId, name: $('#name').val()});
    // video.requestFullScreen();
  };

  function onSocketError(reason) {
    console.log('Unable to connect to server', reason);
  };

  function onSocketPlayVideo(data){
    console.log("onSocketPlayVideo", data);
    current_video_time = timeset[data.id-1];
    video.currentTime = current_video_time.start;
    video.play();
  };

  $(video).on('progress', function(event) {
    event.preventDefault();
    console.log('Video is playing',event);

    if(event.currentTarget.currentTime > current_video_time.end){
      video.pause();
    }
  });

};

$(document).on('ready', init);