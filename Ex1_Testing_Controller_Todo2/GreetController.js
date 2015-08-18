/**
 * Created by namratam on 20-05-2015.
 */
var app = angular.module("myapp",[]);

app.controller("GreetController",function($scope) {

    //     $scope.abc="angular session";

    $scope.clear = function() {
        $scope.myname = "";
    }

    $scope.greet = function() {
        $scope.myname1 = "hello "+" "+$scope.myname;
    }
});