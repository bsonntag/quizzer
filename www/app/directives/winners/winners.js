(function() {
  angular
    .module('starter')
    .controller('WinnersCtrl', WinnersCtrl)
    .directive('qzWinners', winners);

  function winners() {
    return {
      restrict: 'E',
      scope: {
        show: '='
      },
      replace: true,
      templateUrl: 'app/directives/winners/winners.html',
      controller: 'WinnersCtrl',
      controllerAs: 'ctrl'
    };
  }

  function WinnersCtrl($scope, Game, authProvider, _) {
    var ctrl = this;
    ctrl.currentPlayerWon = currentPlayerWon;
    setWinners(false, []);

    authProvider.me()
      .then(setCurrentUser);

    Game.onWinners(showWinners);
    Game.onQuestion(hideWinners);

    function showWinners(winners) {
      setWinners(true, winners);
    }

    function hideWinners(question) {
      setWinners(false, []);
    }

    function setWinners(show, winners) {
      ctrl.show = show;
      ctrl.winners = winners;
    }

    function setCurrentUser(user) {
      ctrl.currentUser = user;
    }

    function currentPlayerWon() {
      return _.contains(winners, ctrl.currentUser);
    }
  }
})();

