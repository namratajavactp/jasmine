/**
 * Created by namratam on 22-05-2015.
 */
describe('Filter:TestingFilterSpec', function() {

    var scope,rootScope,myFilter;


    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller,$filter){
        rootScope = $rootScope;
        scope = $rootScope.$new();
         myFilter = $filter('MyFilter');


        $controller('wish', {$scope: scope});
    }));


    it('ensure that filter has got loaded.', inject(function ($filter) {

        expect(myFilter).toBeDefined();
    }));



         it('should show "yes" when true is passed', inject(function ($filter) {
             var result = myFilter(true);
             expect(result).toBe('yes');
         }));

/*
     it('should have correct page title.', function() {
     expect($rootScope.page_title).toEqual('About Me');
     });

     it('should have correct page description.', function() {
     expect($rootScope.page_description).toEqual('Here is my story.');
     });   */
});