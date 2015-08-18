/**
 * Created by namratam on 20-05-2015.
 */
describe('PasswordController', function() {
    beforeEach(module('app'));

    var controller,$scope;

    beforeEach(inject(function($controller){
        $scope = {};
        controller = $controller('PasswordController', { $scope: $scope });
    }));

     describe('$scope.grade', function() {
        it('sets the strength to "strong" if the password length is >8 chars', function() {
            $scope.password = 'longerthaneightchars';
            $scope.grade();
            expect($scope.strength).toEqual('strong');
        });
    });
});
