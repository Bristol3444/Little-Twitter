"use strict";
const socialPosts = {
    templateUrl: `app/socialpost/socialpost.html`,
    controller: [function(){
        const vm = this;
        // setting formStatus equal to false
        vm.formStatus = false;
        // method that toggles the value of formStatus between false and true
        // used in a click event to change boolean value, which effectively hides and shows the postForm HTML depending on the bool value
        vm.toggleForm = () => {
            vm.formStatus = !vm.formStatus;
            console.log(vm.formStatus);
        };
        // delete method that splices out post object from the posts array (housed in parent)
        vm.deletePost = (index) => {
            vm.posts.splice(index, 1);
            console.log(vm.feed);
        };
        // add method that adds a post object onto the post's list. then sets formStatus back to false, so form is hidden
        vm.addPost = (post) => {
            vm.posts.unshift({...post});
            vm.formStatus = false;
        }
        // array of starter posts
        vm.posts = [
            {
                title: "Title One",
                body: "Body One"
            },
            {
                title: "Title Two",
                body: "Body Two"
            },
            {
                title: "Title Three",
                body: "Body Three"
            }
        ]
        
    }]
}
angular
    .module("LittleTwitter")
    .component("socialPosts", socialPosts);