var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
var assert = chai.assert;
describe('Testing HelloWorld Controller', function() {

    beforeEach(module('myApp'));

    var HelloWorldController,
        scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        HelloWorldController = $controller('HelloWorldController', {
            $scope: scope
        });
    }));
    it('test that greeting variable displays hello world!', function () {
       // expect(scope.greeting).toEqual("Hello World!");
        expect(scope.greeting).to.equal("Hello World!");
       //expect(scope.greeting).toEqual("Hello world!");
    });

});


/*
 The inject function wraps a function into  an injectable function.
 The inject() creates new instance of $injector per test, which is then used for resolving references.

 https://docs.angularjs.org/api/ngMock/function/angular.mock.inject

 */

//http://attackofzach.com/setting-up-a-project-using-karma-with-mocha-and-chai/