'use strict';

require('angular');
require('angular-ui-router');

require('./project/project');

module.exports = angular.module('primer', ['ui.router', 'primer.project'])

    .config(require('./routes'))

    .directive('header', require('./directive'));
