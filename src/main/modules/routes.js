/* istanbulify ignore file */

'use strict';

module.exports = ['$urlRouterProvider', '$stateProvider',
    function ($urlRouterProvider, $stateProvider) {

        // default route when no pattern matches the requested URL
        $urlRouterProvider.otherwise('/projects');

        $stateProvider
            .state('projects', {
                url: '/projects',
                views: {
                    '@': {
                        templateUrl: 'views/projects.html',
                        controller: ['$scope', 'projects',
                            function ($scope, projects) {
                                $scope.projects = projects;
                            }
                        ]
                    }
                },
                resolve: {
                    projects: ['ProjectService',
                        function (ProjectService) {
                            return ProjectService.projects();
                        }
                    ]
                }
            })

            .state('projects.details', {
                url: '/:id',
                views: {
                    'details': {
                        templateUrl: 'views/project-details.html',
                        controller: ['$scope', 'resources',
                            function ($scope, resources) {
                                $scope.resources = resources;
                            }
                        ]
                    }
                },
                resolve: {
                    resources: ['$stateParams', 'ProjectService',
                        function ($stateParams, ProjectService) {
                            return ProjectService.resources($stateParams.id);
                        }
                    ]
                }
            });
    }
];
