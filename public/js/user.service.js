(function () {
  'use strict';

  angular
    .module('app')
    .factory("userService", userService);

  userService.$inject = ["$log", "$http", "tokenService"];

  function userService($log, $http, token) {
    $log.info("user service loaded!");

    var service = {
      create: create,
      update: update
    };
    return service;

    function create(data) {
      var promise = $http({
        method: 'POST',
        url:    '/api/users',
        data:   data,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      return promise;
    }

    function update(data) {
      var promise = $http({
        method: 'PUT',
        url:    '/api/users/me',
        data:   data,
        headers: {
          // Add an auth header to ensure that this request goes thru!
          'Authorization': 'Bearer ' + token.retrieve(),
          'Content-Type':  'application/json'
        }
      });

      return promise;
    }
  }

})();
