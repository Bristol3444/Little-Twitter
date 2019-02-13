"use strict";
const socialpost = {
    templateUrl: `app/socialpost/socialpost.html`,
    controller: [function(){
        const vm = this;
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
        vm.addFeed = function() {

        };

    }]
}
angular
    .module("LittleTwitter")
    .component("socialpost", socialpost);