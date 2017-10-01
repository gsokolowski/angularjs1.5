var app = angular.module('myApp').controller('MainController', MainController);

function MainController(FilmFactory) {
    var vm = this;

    // use FilmFatory to get data
    FilmFactory.getAllFilms().then(function(response) {
       vm.films = response; //response return response.data from FilmFactory
    });

    vm.name = 'Thomas from main page';
}

