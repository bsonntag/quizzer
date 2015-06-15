(function() {
  angular
    .module('starter')
    .service('quizServer', quizServer);

  function quizServer($http, socketio, quizHost) {
    function get(path) {
      return $http.get(quizHost + path);
    }

    function post(path, params) {
      return $http.post(quizHost + path, params);
    }

    function on(event, handler) {
      return socketio.on(event, handler);
    }

    return {
      get: get,
      post: post,
      on: on
    }
  }
})();
