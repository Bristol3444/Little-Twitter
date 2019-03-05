"use strict";
const postForm = {
    // binding the onSubmit method back up to the parent
    bindings: {
        onSubmit: "&",
    },
    templateUrl: `app/postform/postform.html`,
    controller: [function() {
        const vm = this;
        // method that empties out the post object for when a second post is called
        vm.clearFields = () => {
            vm.post = {};
        }
    }]
}
angular
    .module("LittleTwitter")
    .component("postForm", postForm);