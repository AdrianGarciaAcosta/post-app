angular.module("myApp")

    .controller("newPostController", ["$scope", "postService", "$location", function ($scope, postService, $location) {

        $scope.post = {};
        $scope.title = "Crear post";

        $scope.savePost = function () {
            postService.addPost($scope.post);
            $location.path("/");
        };

    }]);