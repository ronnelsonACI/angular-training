/* istanbulify ignore file */

'use strict';

require('angular');
require('angular-mocks');

describe('Module: primer', function () {

    var $scope,
        $httpBackend;

    beforeEach(function () {
        inject(function ($rootScope, $controller, _$httpBackend_) {
            $scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
        });
    });

    afterEach(function () {
    });

    it('should ... placeholder', inject(function () {
        expect(true).to.be.true;
    }));
});