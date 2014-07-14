'use strict';

/* Controllers */

angular.module('stationmaster.controllers', [])
  .controller('TableController', ['$scope', '$http', 'CSVParser', function($scope, $http, CSVParser) {
    var url = 'stationmaster.csv';
    angular.extend($scope, {
      data: [],
      loading: false,
      loadCSV: function() {
        $http.get(url).success(function(csv) {
            $scope.data = CSVParser.parse(csv);
        });
      }
    });

    $scope.loadCSV();
  }]);
