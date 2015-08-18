/**
 * Created by namratam on 20-05-2015.
 */
describe('Greet Controller Test', function() {

    beforeEach(module('myapp'));
    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('test myname1 after invoking greet!', function() {

        var $scope = {};
        var greetController = $controller('GreetController', { $scope: $scope });
        $scope.myname="arjuna";
        $scope.greet();
        expect($scope.myname1).toEqual("hello  arjuna");
        //expect(scope.greeting).toEqual("Hello world!");
    });

});
