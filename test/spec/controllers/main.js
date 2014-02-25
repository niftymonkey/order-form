'use strict';
var expect = chai.expect;

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('orderFormApp'));

    var MainCtrl,
        scope,
        $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/awesomeThings')
            .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings).to.equal(undefined);
        $httpBackend.flush();
        expect(scope.awesomeThings.length).to.equal(4);
    });
});
