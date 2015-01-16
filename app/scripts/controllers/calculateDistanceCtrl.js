/**
 * Created by fission on 10/4/2014.
 */

myApp.controller("calculateDistanceCtrl", ["$scope", "$log", "$rootScope", function ($scope, $log, $rootScope) {

    $scope.sourcePlace = "";
    $scope.destinationPlace = "";
    $scope.showMsgDiv = false;

    var fromAddrLatLng, toAddrLatLng, viaAddrLatLng;

    (function initializeGoogleMaps() {
        new google.maps.places.Autocomplete(document.getElementById('fromLocation'));
        new google.maps.places.Autocomplete(document.getElementById('toLocation'));
    })();

    $scope.resetFields = function () {
        $scope.sourcePlace = "";
        $scope.destinationPlace = "";
        $scope.showMsgDiv = false;
    };

    $scope.getLatitudesAndLongitudes = function () {

        var successCalls = 0, errorCount = 0;
        var fromPlace = $scope.sourcePlace = document.getElementById('fromLocation').value;
        var toPlace = $scope.destinationPlace = document.getElementById('toLocation').value;

        $scope.showMsgDiv = true;

        if (fromPlace != "" && toPlace != "") {
            geocoder = new google.maps.Geocoder();

            geocoder.geocode({
                'address': fromPlace
            }, function (result, status) {
                if (status === "ZERO_RESULTS" || status === "NOT_FOUND") {
                    errorCount += 1;
                }
                if (status === google.maps.GeocoderStatus.OK) {
                    fromAddrLatLng = new google.maps.LatLng(result[0].geometry.location.lat(), result[0].geometry.location.lng());
                    successCalls += 1;
                }
            });

            geocoder.geocode({
                'address': toPlace
            }, function (result, status) {
                if (status === "ZERO_RESULTS" || status === "NOT_FOUND") {
                    errorCount += 1;
                }

                if (errorCount > 0) {
                    document.getElementById('distance').innerHTML = "No results found. Enter valid places only.";
                    return;
                }

                if (status === google.maps.GeocoderStatus.OK) {
                    toAddrLatLng = new google.maps.LatLng(result[0].geometry.location.lat(), result[0].geometry.location.lng());
                    successCalls += 1;
                    calculateDistance(successCalls, errorCount);
                }
            });

        } else {
            document.getElementById('distance').innerHTML = "Please enter a valid address in both the fields.";
        }

    }

    function calculateDistance(successCount, errorCount) {
        // Mehidipatnam latLng
        viaAddrLatLng = new google.maps.LatLng(17.3959, 78.4312);
        if (errorCount > 0) {
            document.getElementById('distance').innerHTML = "No results found. Enter valid places.";
            return;
        }

        if (successCount == 2) {
            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix({
                origins: [fromAddrLatLng],
                destinations: [toAddrLatLng],
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.METRIC,
                avoidHighways: false,
                avoidTolls: false
            }, calculateDistanceCallback);
        } else if (successCount != 2) {
            document.getElementById('distance').innerHTML = "Error in Geocoding.";
        }
    }

    function calculateDistanceCallback(response, status) {
        console.log("response : ", response, " status : ", status);
        if (status === "OK") {
            try {
                document.getElementById('distance').innerHTML = "Total distance is : <strong>"
                    + response.rows[0].elements[0].distance.text + "</strong>, And will take : <strong>"
                    + response.rows[0].elements[0].duration.text + "</strong> to drive.";
            } catch (error) {
                document.getElementById('distance').innerHTML = "No results found. Please enter INDIAN places only.";
            }
        } else {
            document.getElementById('distance').innerHTML = "Geocode was not successful for the following reason: " + status;
        }
    }

}]);
