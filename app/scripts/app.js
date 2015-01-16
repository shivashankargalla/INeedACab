'use strict';

/**
 * @ngdoc overview
 * @name ineedacabApp
 * @description
 * # ineedacabApp
 *
 * Main module of the application.
 */

var myApp = angular
    .module('ineedacabApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../views/home.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/calculateDistance', {
                templateUrl: 'views/calculateDistance.html',
                controller: 'calculateDistanceCtrl'
            })
            .when('/allCabs/1', {
                templateUrl: '../views/allCabs-1.html',
                controller: 'allCabsCtrl'
            })
            .when('/allCabs/2', {
                templateUrl: '../views/allCabs-2.html',
                controller: 'allCabsCtrl'
            })

            .when('/allCabs/3', {
                templateUrl: '../views/allCabs-3.html',
                controller: 'allCabsCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
