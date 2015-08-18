describe('MainCtrl Server Calls', function() {
  beforeEach(module('serverApp'));

  var ctrl, mockBackend;

  beforeEach(inject(function($controller, $httpBackend) {

    mockBackend = $httpBackend;

      // backend definition common for all tests
      mockBackend.when('GET','/api/note')
          .respond([{id: 1, label: 'Mock'}]);
      ctrl=$controller;

  }));

  it('should load items from server', function() {

   //   mockBackend.expectGET('/api/note');
      // At this point, a server request will have been made
      var ctrl1 = ctrl('MainCtrl');
      // Initially, before the server responds,
      // the items should be empty
      expect(ctrl1.items).toEqual([]);


    // Simulate a server response
    mockBackend.flush();

    expect(ctrl1.items).toEqual([{id: 1, label: 'Mock'}]);
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