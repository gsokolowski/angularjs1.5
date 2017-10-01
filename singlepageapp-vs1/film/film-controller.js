var app = angular
    .module('myApp')
    .controller('FilmController', FilmController);

function FilmController($http, $routeParams) {

    var vm = this;
    var id = $routeParams.id; // from router /film/:id

    $http.get('http://swapi-tpiros.rhcloud.com/films/' + id).then(function(response) {

        vm.film = response.data; // take only data of one film per id form json object
        console.log(vm.film);
    });
}