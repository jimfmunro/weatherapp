'use strict';

describe('Service: Myservice', function () {

  // load the service's module
  beforeEach(module('weatherApp'));

  // instantiate service
  var Myservice;
  beforeEach(inject(function (_Myservice_) {
    Myservice = _Myservice_;
  }));

  it('should do something', function () {
    expect(!!Myservice).toBe(true);
  });

});
