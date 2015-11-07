'use strict';

require('angular');

require('./project/project');

module.exports = angular.module('primer', ['primer.project'])

    .directive('header', require('./directive'))

    .controller('AppCtrl', ['$scope', 'ProjectService',
        function ($scope, ProjectService) {
            ProjectService.projects().then(function (projects) {
                $scope.projects = projects;
            });
        }
    ]);
