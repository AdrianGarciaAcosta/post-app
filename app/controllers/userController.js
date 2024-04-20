angular.module("myApp")

    .controller("userController", ["$scope", "$routeParams", "$http", function ($scope, $routeParams, $http) {

        $http.get("https://jsonplaceholder.typicode.com/users/" + $routeParams.id)
            .then(function successCallback(response) {
                $scope.user = response.data;
            }, function errorCallback(response) {
                // TO DO - ERROR
            });

    }]);