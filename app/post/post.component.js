"use strict";
const post = {
    bindings: {

    },
    templateUrl: `app/post/post/html`
}

angular
    .module("LittleTwitter")
    .component("post", post);