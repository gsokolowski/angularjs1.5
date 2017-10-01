
var app = angular.module('myApp').filter('reverse', reverse);

function reverse() {
    return function(passedString) {
        if (passedString) {
            return passedString.split('').reverse().join('');
        }
    }
}