

describe('ItemCtrl With global mock', function() {

  var ctrl;
  //Change the order to see the effect of Overriding
  beforeEach(module('notesApp1'));
  beforeEach(module('notesApp1Mocks'));
  
  

  beforeEach(inject(function($controller) {
    ctrl = $controller('ItemCtrl');
  }));

  it('should load mocked out items', function() {
    expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
  });

});



/*This ensures that after notesApp1 is loaded, we load the notesApp1Mocks module, which overrides the ItemService.
 After that, when our test loads the controller, which then calls the service, it defers to the mocked out
 ItemService that we created.We can use this approach when we need a global reusable mock, and defer to the
 describe level mock when we need a mock just one particular test.*/