/**
 * Created by namratam on 22-05-2015.
 */


// declare a module
var myAppModule = angular.module('myApp', []);

// configure the module.
// in this example we will create a greeting filter

myAppModule.filter('greet', function() {
    return function(name) {
    return 'Hello,' + name + '!';
    };
    });


myAppModule.controller('wish',function($scope){
    $scope.disp = "true";
    $scope.clear = function() {
    $scope.myname = "";
    }

    $scope.greet1 = function() {
    //  $scope.myname1 = "hi  "+$scope.myname;
    $scope.disp = "false";

    }
    });


