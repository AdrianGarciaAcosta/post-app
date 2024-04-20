angular.module("myApp")

    .controller("homeController", ["$scope", "$http", "postService", "userService", "$location", function ($scope, $http, postService, userService, $location) {

        $scope.viewPosts = $location.path().includes('posts') || $location.path().includes('home');
        $scope.viewUsers = $location.path().includes('users');

        $scope.posts = postService.getPosts();

        if ($scope.posts === null && $scope.viewPosts) {
            $http.get("https://jsonplaceholder.typicode.com/posts/")
                .then(function successCallback(response) {
                    $scope.posts = response.data;
                    postService.savePosts($scope.posts);
                }, function errorCallback(response) {
                    // TO DO - ERROR
                });
        }

        $scope.users = userService.getUsers();

        if ($scope.users === null && $scope.viewUsers) {
            $http.get("https://jsonplaceholder.typicode.com/users/")
                .then(function successCallback(response) {
                    $scope.users = response.data;
                    userService.saveUsers($scope.users);
                }, function errorCallback(response) {
                    // TO DO - ERROR
                });
        }

        $scope.removePost = function (post) {
            $scope.posts = $scope.posts.filter(function (element) {
                return element.id !== post.id;
            });
            postService.savePosts($scope.posts);
        };
    }]);