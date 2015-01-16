'use strict';

/**
 * @ngdoc function
 * @name ineedacabApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ineedacabApp
 */
myApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];


    $scope.myInterval = 2000;
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        var newWidth = slides.length;
        slides.push({
            image: 'images/slide'+(newWidth+1)+".jpg"
        });
    };
    for (var i=0; i<3; i++) {
        $scope.addSlide();
    }


});
