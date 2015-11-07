'use strict';

module.exports = ['ProjectResource',

    function (ProjectResource) {
        return {
            projects: function () {
                return ProjectResource.projects.query().$promise;
            }
        };
    }
];
