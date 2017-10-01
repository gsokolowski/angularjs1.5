

var app = angular
    .module('myApp')  // module getter syntax
    .controller('MyController', MyController);  // append controller to this module 'myApp'
                                                // you can also add to module not only controllers but:
                                                // factories, services, custom directives and custom filters
                                                // MyController should be handled by function MyController()
function MyController() {
    var vm = this;
    vm.name = 'Thomas';
}