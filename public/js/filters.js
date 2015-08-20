(function() {
  'use strict';

  angular.module('stationmaster.filters', [])
    .filter('stripprotocol', function() {
      return function(raw) {
  	    if (raw.indexOf("https://") === 0) {
  	      return raw.substring(8);
  	    }
  	    if (raw.indexOf("http://") === 0) {
  	      return raw.substring(7);
  	    }
      };
    });
}());
