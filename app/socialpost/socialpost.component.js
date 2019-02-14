"use strict";
const socialpost = {
    templateUrl: `app/socialpost/socialpost.html`,
    controller: [function(){
        const vm = this;
        vm.formToggle = false;
        vm.feed = [
            {
                title: "thought 1",
                body: "here is the first thought I ever had"
            },
            {
                title: "thought 2",
                body: "Pancakes rock"
            },
            {
                title: "thought 3",
                body: "The music exercise we did earlier was fun"
            }
        ];
        vm.onSubmit = function(newPost) {
            console.log(newPost);
            vm.feed.push({...newPost});
            console.log(vm.feed);

        };
        vm.deleteFeed = function(index) {
            vm.feed.splice(index, 1);
            console.log(vm.feed);

        }
        vm.showForm = function() {
            vm.formToggle = !vm.formToggle;
            console.log(vm.formToggle);
        }
        
    }]
}
angular
    .module("LittleTwitter")
    .component("socialpost", socialpost);