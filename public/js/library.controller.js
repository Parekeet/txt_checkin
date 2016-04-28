(function() {
  "use strict";

  angular
    .module("app")
    .controller("LibraryController", LibraryController);

  LibraryController.$inject = ["$log", "authService", "userService", "$state", "$http"];

  function LibraryController($log, authService, userService, $state, $http) {
    var vm = this;

    vm.formData = {
      email: authService.currentUser().email,
      name:  authService.currentUser().name
    };
    vm.authService  = authService;

    vm.posts = [];

    vm.newPost = {
      title:    "",
      content:  ""
    }

    vm.deletePost = deletePost;
    vm.updatePost = updatePost;
    vm.makePost   = makePost;
    vm.resetEditForm = resetEditForm;

    getPosts();

        function getPosts() {
          $http.get('http://localhost:3000/').then(function(response) {
            vm.posts = response.data;
          }, function(errRes) {
            console.error('Error gathering posts!', errRes);
          });
        }

        function deletePost(id) {
          $http.delete('http://localhost:3000/api/posts/' + id).then(function(response) {
            console.log(response);
          }, function(errRes) {
            console.error('Error deleting post!', errRes);
          }).then(getPosts);
        }

        function makePost() {
          if (vm.newPost.category === "Choose Category") {
            $log.info("You must choose a category!");
          } else {
            $http.post('http://localhost:3000/api/posts', vm.newPost)
            .then(getPosts)
            .then(function(response) {
              vm.newPost = {
                title: "",
                content: ""
              };
            });
          }
        }

        function updatePost(id) {
          if (vm.editPost.category === "Choose Category") {
            $log.info("You must choose a category!");
          } else {
            $http.put('http://localhost:3000/api/posts/' + id, vm.editPost).then(function(response) {
              vm.editPost = {
                title: "",
                content: ""
              };
            }, function(errRes) {
              console.log('Error updating post!', errRes);
            }).then(getPosts);
          }
        }

        function resetEditForm() {
          vm.postCategory = '';
          vm.postName = '';
          vm.editPost = {
            title: "",
            content: ""
          };
        }

      }

    })();

  }
})();
