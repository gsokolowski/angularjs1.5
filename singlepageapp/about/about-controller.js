var app = angular
    .module('myApp')
    .controller('AboutController', AboutController);


function AboutController() {
    var vm = this;

    vm.about = 'About';
}