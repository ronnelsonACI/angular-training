'use strict';

module.exports = [
    function () {
        return function (resource) {
            return resource.firstName + ' ' + resource.lastName;
        };
    }
];
