/**
 * Created by namratam on 22-05-2015.
 */


// declare a module
var myAppModule = angular.module('myApp', []);

// configure the module.
// in this example we will create a MyFilter filter

myAppModule.filter('MyFilter', function () {
    return function (val, postfix) {
    var result;
    if (val === true) {
    result = 'yes';
    } else if (val === false) {
    result = 'no';
    } else {
    // Kind of like ArgumentException from .NET or IllegalArgumentException in Java
    var errorMessage = 'Unknown argument: \"' + val + '\"';
    throw errorMessage;
    }

    if ((postfix !== undefined) && (postfix !== null)) {
    result = result + ' ' + postfix;
    }
    return result;
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


