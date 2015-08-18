/**
 * Created by namratam on 22-05-2015.
 */
describe('Filter:TestingFilterSpec', function() {

    var scope,rootScope,myFilter;


    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller,$filter){
        rootScope = $rootScope;
        scope = $rootScope.$new();
        myFilter = $filter('greet');

        $controller('wish', {$scope: scope});
    }));

    it('ensure that filter has got loaded.', function() {
        expect(myFilter).toBeDefined();
    });


     it('should show title.', function() {
         var result = myFilter("Sita");
         expect(result).toBe("Hello,Sita!");
     });
/*
     it('should have correct page title.', function() {
     expect($rootScope.page_title).toEqual('About Me');
     });

     it('should have correct page description.', function() {
     expect($rootScope.page_description).toEqual('Here is my story.');
     });   */
});