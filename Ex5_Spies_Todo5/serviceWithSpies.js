/**
 * Created by namratam on 21-05-2015.
 */
describe('MathService with spies', function() {
    //todo:Instantiate a new version of my module before each test
    beforeEach(module('app'));

    var ctrl1,ctrl2, mathService, $scope;

    beforeEach(inject(function($controller, MathService) {
        //todo: spyon the multiply function of 'MathService' and ensure that all calls to it are fwd to it
        spyOn(MathService,'multiply').andCallThrough();
        mathService = MathService;
        $scope = {};
        ctrl1 = $controller('CalculatorController',{ $scope: $scope });
        // ctr2 = $controller('ItemCtrl');
    }));

    it('should load mocked out items', function() {
        //todo:add code to check if mathservice is called, isit called once
        $scope.number = 2;
        $scope.doSquare();
        expect(mathService.multiply).toHaveBeenCalled();

        expect(mathService.multiply.callCount).toEqual(1);

        //todo:test the 'answer' variable assigned to scope
        expect($scope.answer).toEqual(4);
    });
});



/*In the above code example, we introduce Jasmine spies. Jasmine spies allow you to hook onto existing functions,
 and check whether they have been called, and if so, how many times they were called and so on. We call the spyOn
 function with an object as the first argument, and a string with the function name that we want to hook on to as
 the second argument. In this example, we tell Jasmine to spy on the list function of the ItemService. We also tell
 it to continue calling the actual service underneath by calling andCallThrough on the spy. This means we can check
 whether the function was called or not using Jasmine, and have the function work as it used to underneath.*/


