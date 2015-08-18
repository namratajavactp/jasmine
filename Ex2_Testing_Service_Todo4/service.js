/**
 * Created by namratam on 15-05-2015.
 */
var a = angular.module('app',[]);

a.service('MathService', function() {
    this.add = function(a, b) { return a + b };

    this.subtract = function(a, b) { return a - b };

    this.multiply = function(a, b) { return a * b };

    this.divide = function(a, b) { return a / b };
});



a.controller('CalculatorController', function($scope,MathService) {

    $scope.doSquare = function() {

        $scope.answer =  MathService.multiply($scope.number,$scope.number);
    }


});