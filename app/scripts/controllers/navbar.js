'use strict';

angular.module('orderFormApp')
    .controller('NavbarCtrl', function ($scope, $location) {
        $scope.menu = [
            {
                'title': 'Home',
                'link': '/'
            },
            {
                'title': 'Menu',
                'link': '/menu'
            },
            {
                'title': 'About',
                'link': '/about'
            }
        ];

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    });
