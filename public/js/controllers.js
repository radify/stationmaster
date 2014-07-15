'use strict';

/* Controllers */

angular.module('stationmaster.controllers', [])
  .controller('TableController', ['$scope', '$http', 'CSVParser', function($scope, $http, CSVParser) {
    var url = 'stationmaster.csv';
    angular.extend($scope, {
      data: [],
      loading: false,
      loadCSV: function() {
        $scope.loading = true;
        $http.get(url).success(function(csv) {
          $scope.data = CSVParser.parse(csv);
        }).error(function() {
          alert("File " + url + " is not found, please create it. You can use stationmaster-ansible to manage this CSV or do it through other means.");
        }).finally(function() {
          $scope.loading = false;
        });
      }
    });

    $scope.loadCSV();
  }]);
