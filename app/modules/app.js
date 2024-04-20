angular.module("myApp", ["ngRoute"])

    // .config(function (localStorageServiceProvider) {
    //     localStorageServiceProvider
    //         .setStorageType('sessionStorage');
    // })

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                redirectTo: '/posts'
            })
            .when("/index.html", {
                redirectTo: '/posts'
            })
            .when("/posts", {
                controller: "homeController",
                templateUrl: "views/home.html"
            })
            .when("/users", {
                controller: "homeController",
                templateUrl: "views/home.html"
            })
            .when("/post/:id", {
                controller: "postController",
                templateUrl: "views/post.html"
            })
            .when("/user/:id", {
                controller: "userController",
                templateUrl: "views/user.html"
            })
            .when("/posts/new", {
                controller: "newPostController",
                templateUrl: "views/postForm.html"
            })
            .when("/posts/update/:id", {
                controller: "updatePostController",
                templateUrl: "views/postForm.html"
            })

        $locationProvider.html5Mode(false).hashPrefix('');
    });