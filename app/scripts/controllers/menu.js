'use strict';

angular.module('orderFormApp')
    .controller('MenuCtrl', function ($scope, $http) {
        $http.get('/api/cookies/available').success(function (cookies) {
            $scope.cookies = cookies;
        });
    });
