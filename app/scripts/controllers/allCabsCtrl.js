/**
 * Created by fission on 10/4/2014.
 */

myApp.controller("allCabsCtrl", ["$scope", "$log", "$rootScope", "getTheJsonDataFactory",
    function ($scope, $log, $rootScope, getTheJsonDataFactory) {
        var tabClasses;

        $scope.getTheJsonDataSuccessCallback = function (data) {
            if (data) {
                $scope.data = data;
                $log.info("Data fetched successfully.", $scope.data);
                $scope.cabsData = data.cabs;
            }
        };

        $scope.getTheJsonDataFailureCallback = function () {
            $log.error("Error in fetching the data.");
        };

        var config = {method: 'GET', url: 'assets/data.json'};
//        var config = {method: 'GET', url: '../assets/data.json'};
//        var config = {method: 'GET', url: '../../assets/data.json'};

        getTheJsonDataFactory
            .getTheJsonData(config)
            .then($scope.getTheJsonDataSuccessCallback, $scope.getTheJsonDataFailureCallback);


    }]);