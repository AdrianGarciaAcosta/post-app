angular.module("myApp")

    .service("postService", [function () {

        this.getPosts = function () {
            return JSON.parse(window.localStorage.getItem("postsStorage"));
        }

        this.savePosts = function (posts) {
            window.localStorage.setItem("postsStorage", JSON.stringify(posts));
        }

        this.savePost = function (post) {
            var posts = this.getPosts();
            posts.filter(function (element) {
                if (element.id == post.id) {
                    element.title = post.title;
                    element.body = post.body;
                    return element;
                }
            });
            this.savePosts(posts);
        }

        this.addPost = function (post) {
            var posts = this.getPosts();
            // Aunque tiene ID no será final ya que no podemos hace post al API
            post.id = posts.length + 1;
            posts.push(post);
            this.savePosts(posts);
        }

    }]);