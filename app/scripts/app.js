'use strict';

angular.module('orderFormApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main',
                controller: 'MainCtrl'
            })
            .when('/menu', {
                templateUrl: 'partials/menu',
                controller: 'MenuCtrl'
            })
            .when('/about', {
                templateUrl: 'partials/about',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });