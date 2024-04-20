angular.module("myApp")

    .controller("updatePostController", ["$scope", "$http", "$location", "$routeParams", "postService", function ($scope, $http, $location, $routeParams, postService) {

        $scope.title = "Modificar post";

        $http.get("https://jsonplaceholder.typicode.com/posts/" + $routeParams.id)
            .then(function successCallback(response) {
                $scope.post = response.data;
            }, function errorCallback(response) {
                // TO DO - ERROR
            });

        $scope.savePost = function () {
            postService.savePost($scope.post);
            $location.path("/");
        };

    }]);