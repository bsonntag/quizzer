angular.module('starter', ['ionic', 'LocalStorageModule', 'starter.constants'])
  .config(Router)
  .config(addUnauthorizedInterceptor)
  .run(Runner);

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginCtrl as ctrl'
    })
    
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "app/layout/tabs.html"
    })
    .state('tab.game', {
      url: '/game',
      views: {
        'game': {
          templateUrl: 'app/game/game.html',
          controller: 'GameCtrl as ctrl'
        }
      }
    })
    .state('tab.users', {
      url: '/users',
      views: {
        'users': {
          templateUrl: 'app/users/users.html',
          controller: 'UsersCtrl as ctrl'
        }
      }
    })
    .state('tab.account', {
      url: '/account',
      views: {
        'account': {
          templateUrl: 'app/account/account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/login');
}

function addUnauthorizedInterceptor($httpProvider) {
  $httpProvider.interceptors.push(UnauthorizedInterceptor);
}

function UnauthorizedInterceptor($q, $location) {
  function responseError(error) {
    if(error.status === 401) {
      $location.path('/login');
    }

    return $q.reject(error);
  }

  return {
    responseError: responseError
  };
}

function Runner($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
}

