'use strict';

angular.module('orderFormApp')
    .controller('NavbarCtrl', function ($scope, $location) {
        $scope.menu = [
            {
                'title': 'Home',
                'link': '/'
            },
            {
                'title': 'Order',
                'link': '/order'
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
