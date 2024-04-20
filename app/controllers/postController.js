angular.module("myApp")

    .controller("postController", ["$scope", "$routeParams", "$http", function ($scope, $routeParams, $http) {

        $http.get("https://jsonplaceholder.typicode.com/posts/" + $routeParams.id)
            .then(function successCallback(response) {
                $scope.post = response.data;
            }, function errorCallback(response) {
                // TO DO - ERROR
            });

    }]);