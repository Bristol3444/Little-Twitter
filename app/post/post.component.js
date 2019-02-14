"use strict";
const post = {
    bindings: {
        show: "&"
    },
    templateUrl: `app/post/post.html`
}

angular
    .module("LittleTwitter")
    .component("post", post);