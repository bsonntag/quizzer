(function() {
  angular
    .module('starter')
    .controller('GameCtrl', GameCtrl);

  function GameCtrl($scope, Game, Users, _) {
    var ctrl = this;
    ctrl.answerId = null;
    ctrl.answer = answer;
    ctrl.answered = function() {
      ctrl.answerId !== null;
    };

    Game.onQuestion(changeQuestion);

    function changeQuestion(newQuestion) {
      ctrl.question = newQuestion;
      ctrl.answerId = null;
      ctrl.winners = null;
    }

    function answer() {
      Game.answer(ctrl.question.id, ctrl.answerId);
    }
  }
})();
