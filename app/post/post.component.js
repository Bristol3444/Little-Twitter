"use strict";
const post = {
    // binding the onDelete method back to the parent
    // binding the item down to the child (aka the post in the ng-repeat)
    // binding the index of the array down to the child
    bindings: {
        onDelete: "&",
        item: "<",
        index: "<"
    },
    templateUrl: `app/post/post.html`
}

angular
    .module("LittleTwitter")
    .component("post", post);