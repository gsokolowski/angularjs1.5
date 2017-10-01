var app = angular
    .module('myApp')
    .controller('MainController', MainController);

function MainController($http) {
    var vm = this;

    // get data from outside service using $http.get()
    $http.get('http://swapi-tpiros.rhcloud.com/films').then(function(response) {

        console.log(response); // json object with data of films
        vm.films = response.data; // take only data form json object
    });

    vm.name = 'Thomas from main page';
}