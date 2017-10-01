var app = angular.module('myApp').controller('FilmController', FilmController);

function FilmController($routeParams, FilmFactory) {

    var vm = this;
    var id = $routeParams.id; // from router /film/:id

    console.log(id);

    FilmFactory.getOneFilm(id).then(function(response) {

        vm.film = response; //response return response.data from FilmFactory
    });
}