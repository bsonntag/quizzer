(function() {
  angular
    .module('starter')
    .service('Game', Game);

  function Game($rootScope, quizServer, Users) {
    var questionEvent = 'game-question';
    var winnersEvent = 'game-winners';

    quizServer.on('game:question', broadcastQuestion);
    quizServer.on('game:winners', broadcastWinners);

    function broadcastQuestion(question) {
      $rootScope.$apply(function() {
        $rootScope.$broadcast(questionEvent, question);
      });
    }

    function broadcastWinners(winnerIds) {
      $rootScope.$apply(function() {
        var winners = Users.findAll(winnerIds);
        $rootScope.$broadcast(winnersEvent, winners);
      });
    }

    function onQuestion(listener) {
      $rootScope.$on(questionEvent, function(event, args) {
        listener(args);
      });
    }

    function onWinners(listener) {
      $rootScope.$on(winnersEvent, function(event, args) {
        listener(args);
      });
    }

    function answer(questionId, answerId) {
      var params = {
        questionId: questionId,
        answerId: answerId
      };
      quizServer.post('/answers', params);
    }

    return {
      answer: answer,
      onQuestion: onQuestion,
      onWinners: onWinners
    };
  }
})();
