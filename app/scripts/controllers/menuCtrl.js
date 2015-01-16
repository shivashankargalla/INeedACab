/**
 * Created by fission on 10/5/2014.
 */

myApp.controller("menuCtrl", ["$scope", "$log", "$rootScope", function ($scope, $log, $rootScope) {

    jQuery(".icon").click(function () {
        var sib = jQuery(".mainMenu li").siblings();
        sib.each(function () {
            jQuery(this).removeClass('active');
        });
        jQuery(".homeIcon").addClass('active');
    });

    jQuery(".mainMenu li").click(function () {
        var sib = jQuery(this).siblings();
        jQuery(this).addClass('active');
        sib.each(function () {
            jQuery(this).removeClass('active');
        });
    });

}]);
