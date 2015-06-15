(function() {
  angular
    .module('starter')
    .controller('UsersCtrl', UsersCtrl);

  function UsersCtrl($scope, Users) {
    var ctrl = this;

    ctrl.users = Users.all;
  }
})();
