(function() {
  angular
    .module('starter')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($state, authProvider) {
    var ctrl = this;

    ctrl.login = login;

    authProvider.me()
      .then(goToGame);

    function login() {
      authProvider.login(ctrl.username, ctrl.password)
        .then(goToGame);
    }

    function goToGame() {
      $state.go('tab.game');
    }
  }
})();
