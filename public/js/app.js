var app = angular.module("myApp",["ngRoute", "LocalStorageModule", "ui.bootstrap"]);
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/home.html',
            controller: 'MainController'
        })
        .otherwise({redirectTo: '/'});
});
