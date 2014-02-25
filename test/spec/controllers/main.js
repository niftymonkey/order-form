'use strict';
var expect = chai.expect;

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('orderFormApp', 'mockedAwesomeThingsAPI'));

    var MainCtrl,
        scope,
        $httpBackend,
        getResponse;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, _get_Response) {
        getResponse = _get_Response;
        // bootstrap the httpBackend mock
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/awesomeThings').respond(_get_Response);

        // create a new rootScope
        scope = $rootScope.$new();

        // create the MainCtrl with the new scope we just created
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings).to.equal(undefined);
        $httpBackend.flush();
        expect(scope.awesomeThings.length).to.equal(getResponse.length);
    });
});
