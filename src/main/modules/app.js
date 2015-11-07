'use strict';

require('angular');

module.exports = angular.module('primer', [])

    .controller('AppCtrl', ['$scope',
        function ($scope) {
            $scope.name = 'Jaime';
        }
    ]);
