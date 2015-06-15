(function() {
  angular
    .module('starter')
    .service('socketio', socketio);

  function socketio($window, quizHost) {
    var socket = $window.io(quizHost);

    return socket;
  }
})();
