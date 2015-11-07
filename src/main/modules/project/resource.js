'use strict';

module.exports = ['$resource',

    function ($resource) {
        return {
            projects: $resource('/api/project/all', {}, {
                query: {method: 'GET', params: {}, isArray: true}
            })
        };
    }
];
