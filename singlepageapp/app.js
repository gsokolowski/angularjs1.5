
// this is a module setter syntax
var app = angular
    .module('myApp', ['ngRoute'])   // inject angular route library as dependency of module
    .config(config);                // call a config method on angular module
                                    // and config method will execute config function which you need to specify below

// route provider allows you to setup routes for your application
// Documentation  https://docs.angularjs.org/api/ngRoute/provider/$routeProvider

// $routeProvider is build in service another service is $http which is used in main/main-controller.js and film/film-controller.js
function config($routeProvider) {

    // templates as files

    $routeProvider.when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainController', // main/main-controller.js i loaded in index.html
        controllerAs: 'vm'

    }).when('/about', {
        templateUrl: 'about/about.html',
        controller: 'AboutController', // about/about-controller.js i loaded in index.html
        controllerAs: 'vm'

    }).when('/film/:id', {
        templateUrl: 'film/film.html',
        controller: 'FilmController', // film/film-controller.js i loaded in index.html
        controllerAs: 'vm'

    }).when('/404', {
        templateUrl: '404/404.html',
    }).otherwise({
        redirectTo: '/404' // go to 404
    });

    //$routeProvider.when('/', {
    //                template: '<h1> this is the main page </h1>  <a href="#/about">Go to About</a>'
    //            }).when('/about', {
    //                template: '<h1> about page </h1> <a href="#/">Go Home</a>'
    //});


    // You need to start http server to be able to run SPA with templates in files
    // php -S localhost:8887
    // and call http://localhost:8887 and works

    // http://localhost:8000/#/
    // http://localhost:8000/#/film/1
    // http://localhost:8000/#/about
}