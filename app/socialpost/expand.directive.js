"use strict";
function expand() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element.on("focus", function(){
                $element.css("width", "300px");
                $element.css("height", "75px");
            });
            $element.on("blur", function(){
                $element.css("width", "");
                $element.css("height", "");
            })
        }
    }

}

angular
    .module("LittleTwitter")
    .directive("expand", expand);