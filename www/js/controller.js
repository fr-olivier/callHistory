angular.module('starter.controller', [])
.controller('DebugCtrl', ['$scope', 'CallLogService', 'LocalStorage',
    function ($scope, CallLogService, LocalStorage) {

        $scope.data = {};
        $scope.callTypeDisplay = function(type) {
            switch(type) {
                case 1:
                    return 'Incoming';
                case 2:
                    return 'Outgoing';
                case 3:
                    return 'Missed';
                default:
                    return 'Unknown';
            }
        };

        CallLogService.list(1).then(
            function(callLog) {
                console.log(callLog);
                $scope.data.lastCall = callLog[0];
            },
            function(error) {
                console.error(error);
            });
    }]);