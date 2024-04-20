angular.module("myApp")

    .service("userService", [function () {

        this.getUsers = function () {
            return JSON.parse(window.localStorage.getItem("usersStorage"));
        }

        this.saveUsers = function (users) {
            window.localStorage.setItem("usersStorage", JSON.stringify(users));
        }

    }]);