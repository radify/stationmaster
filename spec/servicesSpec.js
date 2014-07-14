'use strict';

describe('service', function() {
  beforeEach(module('stationmaster.services'));

  describe('CSVParser', function() {
    it('should parse a CSV', inject(function(CSVParser) {

      var csv = "URL,Deployed"
        + '\nhttps://foo.dev.com/,21st July'
        + '\nhttps://bar.dev.com/,22nd July';

      expect(CSVParser.parse(csv)).toEqual([{
        URL: 'https://foo.dev.com/',
        Deployed: '21st July'
      },{
        URL: 'https://bar.dev.com/',
        Deployed: '22nd July'
      }]);
    }));
  });
});
