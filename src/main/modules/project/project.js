'use strict';

require('angular');
require('angular-resource');

module.exports = angular.module('primer.project', ['ngResource'])

    .factory('ProjectResource', require('./resource'))

    .service('ProjectService', require('./service'))

    .filter('name', require('./filter'));
