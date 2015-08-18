/**
 * Created by namratam on 15-05-2015.
 */
describe('Unit testing great quotes', function() {
    var $compile,
        $rootScope,$scope;

    // Load the myApp module, which contains the directive
    beforeEach(module('myApp'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
    }));

    it('Replaces the element with the appropriate content', function() {
        // Compile a piece of HTML containing the directive
        $scope.name="Namrata";

        var element ="<say-hello></say-hello>";
            element = $compile(element)($scope);

        // fire all the watches, so the scope expression 'name' will be evaluated
        $scope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain("Hello Namrata");
    });
});

//http://angular-tips.com/blog/2014/06/introduction-to-unit-test-directives/
//http://blog.revolunet.com/blog/2013/12/05/unit-testing-angularjs-directive/


/*
$compile - Compiles an HTML string or DOM
into a template and produces a template function, which can then be
used to link scope and the template together.
 */