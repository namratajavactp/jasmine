/**
 * Created by namratam on 15-05-2015.
 */
var app = angular.module('myApp', []);
app.controller("DirectiveEx",function($scope){

    $scope.name="Namrata";
});

app.directive('sayHello', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>Hello {{name}} </h1>'
    };
});


