/**
 * Created by namratam on 20-05-2015.
 */
describe('ContactController', function() {
    beforeEach(module('myapp'));

    var controller,$scope;

    beforeEach(inject(function($controller){
        $scope = {};
        controller = $controller('ContactController', { $scope: $scope });
    }));


        it('check contacts array', function() {
            expect($scope.contacts).toEqual([{ id:0, name: 'Angular',
                email:'hello@gmail.com',
                phone: '123-2343-44'
            }]);


          });

         it('check save contact method', function() {
            $scope.newcontact ={};
             $scope.newcontact.name = "jasmine";
             $scope.newcontact.email="jasmine@abc.com";
             $scope.newcontact.phone="9920366274";
             $scope.saveContact()
             expect($scope.contacts).toEqual([{ id:0, name: 'Angular',
                 email:'hello@gmail.com',
                 phone: '123-2343-44'
             },{id:1, name: 'jasmine',
                 email:'jasmine@abc.com',
                 phone: '9920366274'}]);
         });

});
