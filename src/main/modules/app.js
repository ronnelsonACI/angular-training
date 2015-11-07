'use strict';

require('angular');

require('./project/project');

module.exports = angular.module('primer', ['primer.project'])

    .controller('AppCtrl', ['$scope', 'ProjectService',
        function ($scope, ProjectService) {
            ProjectService.projects().then(function (projects) {
                $scope.projects = projects;
            });
        }
    ]);
