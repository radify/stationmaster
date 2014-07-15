'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('stationmaster.services', [])
  .service('CSVParser', function() {
    angular.extend(this, {
      parse: function(csv) {
        var lines = csv.split("\n");
        var result = [];
        var headers = lines[0].split(",");

        for(var i = 1; i < lines.length; i++) {
          var obj = {};
          var line = lines[i].split(",");
          if (line.length < 2) {
            continue;
          }

          for(var j = 0; j<headers.length; j++){
            obj[headers[j]] = line[j];
          }

          result.push(obj);
        }

        return result;
      }
    });
  });
