'use strict';

module.exports = ['ProjectResource',

    function (ProjectResource) {
        return {
            projects: function () {
                return ProjectResource.projects.query().$promise;
            },
            resources: function (projectId) {
                return ProjectResource.resources.query({id: projectId}).$promise;
            }
        };
    }
];
