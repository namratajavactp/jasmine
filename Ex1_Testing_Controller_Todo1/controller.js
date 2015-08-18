/**
 * Created by namratam on 20-05-2015.
 */


var a = angular.module("myapp",[]);
a.controller("ContactController",function($scope) {

    $scope.myname="sita";
    var gem = { name:"Namrata Marathe", price:3.00,
    description:'This is fine quality costliest gem',
    canPurchase:false,
    soldOut:true};

    $scope.store=gem;
    });

//https://developer.chrome.com/devtools/docs/javascript-debugging

