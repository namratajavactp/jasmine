describe('MainCtrl Server Calls', function() {
  beforeEach(module('serverApp'));

  var ctrl, mockBackend;

  beforeEach(inject(function($controller, $httpBackend) {


    mockBackend = $httpBackend;
    mockBackend.expectGET('/api/note')
        .respond([{id: 1, label: 'Mock'}]);
    ctrl = $controller('MainCtrl');
    // At this point, a server request will have been made
  }));

  it('should load items from server', function() {
    // Initially, before the server responds,
    // the items should be empty
    expect(ctrl.items).toEqual([]);

    // Simulate a server response
    mockBackend.flush();

    expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
  });

  afterEach(function() {
    // Ensure that all expects set on the $httpBackend
    // were actually called
    mockBackend.verifyNoOutstandingExpectation();

    // Ensure that all requests to the server
    // have actually responded (using flush())
    mockBackend.verifyNoOutstandingRequest();
  });
});

/*
 $httpBackend.expect - specifies a request expectation
 Request expectations provide a way to make assertions about requests made by the application
 and to define responses for those requests.
 The test will fail if the expected requests are not made or they are made in the wrong order.
 */

/*
 Flushing HTTP requests
 The $httpBackend used in production always responds to requests asynchronously.
 If we preserved this behavior in unit testing, we'd have to create async unit tests, which are hard to write,
 to follow and to maintain. But neither can the testing mock respond synchronously; that would change the execution of
 the code under test.

 For this reason, the mock $httpBackend has a flush() method, which allows the test to explicitly flush pending requests.
 This preserves the async api of the backend, while allowing the test to execute synchronously
 */

//https://docs.angularjs.org/api/ngMock/service/$httpBackend