"use strict";
const postform = {
    bindings: {
        onSubmit: "&",
    },
    templateUrl: `app/postform/postform.html`
}
angular
    .module("LittleTwitter")
    .component("postform", postform);