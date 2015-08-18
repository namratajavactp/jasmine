describe('ContactController', function() {

    beforeEach(module('myapp'));

    var ContactController,
        scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ContactController = $controller('ContactController', {
            $scope: scope
        });
    }));
    it('to check  values on load', function () {
        expect(scope.myname).toEqual("sita");

        var gem1 = { name:"Namrata Marathe", price:3.00,
            description:'This is fine quality costliest gem',
            canPurchase:false,
            soldOut:true};

       expect(scope.store).toEqual(gem1);

    });

});