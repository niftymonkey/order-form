'use strict';

angular.module('orderFormApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main',
                controller: 'MainCtrl'
            })
            .when('/order', {
                templateUrl: 'partials/order',
                controller: 'MainCtrl'
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