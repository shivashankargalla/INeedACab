myApp.factory("getTheJsonDataFactory", ["$log", "$rootScope", "$q", "$http",
    function ($log, $rootScope, $q, $http) {

        var factory = {};

        factory.getTheJsonData = function (config) {
            var deferred = $q.defer();

            $http(config)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        };

        return factory;

    }]);
