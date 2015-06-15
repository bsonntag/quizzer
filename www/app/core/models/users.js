(function() {
  angular
    .module('starter')
    .service('Users', Users);

  function Users(quizServer, _) {
    var users = [];
    
    fetch();
    quizServer.on('users:update', fetch);

    function fetch() {
      return quizServer.get('/users')
        .then(function(response) {
          users = response.data;
        });
    }

    function all() {
      return users;
    }

    function find(userId) {
      return _.find(users, function(user) {
        return user.id === userId;
      });
    }

    function findAll(userIds) {
      return _.map(userIds, find);
    }

    return {
      all: all,
      find: find,
      findAll: findAll
    };
  }
})();
