(function() {
  angular
    .module('starter')
    .service('_', underscore);

  function underscore($window) {
    return $window._;
  }
})();
