describe('Controller: public/AboutController', function() {

    var scope,rootScope;


    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller){
        rootScope = $rootScope;
        scope = $rootScope.$new();

         $controller('EmailController', {
            $scope: scope });

    }));

    it('test contacts array', function() {
        expect(scope.contacts).toEqual(["hi@email.com", "hello@email.com"]);
    });


    it('call add function.', function() {
        scope.newcontact= "jasmine@test.com";
        scope.add();
        expect(scope.contacts).toEqual(["hi@email.com", "hello@email.com","jasmine@test.com"]);
    });

});