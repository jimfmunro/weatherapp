"use strict";var app=angular.module("weatherApp",["ngCookies","ngResource","ngSanitize","ngRoute"]);app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),app.controller("MainCtrl",["$scope","$http",function(a,b){a.city="boulder",a.state="co",a.getWeather=function(){a.url="http://api.openweathermap.org/data/2.5/weather?q="+a.city+","+a.state,b({method:"GET",url:a.url}).success(function(b,c){console.log("success: response status: "+c),a.data=b,a.status=c,a.currtime=(new Date).getTime()}).error(function(a,b){console.log("there was an error: "+b)})}}]),app.service("Myservice",function(){});