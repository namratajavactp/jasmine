describe('ItemCtrl with inline mock', function() {
  beforeEach(module('notesApp1'));

  var ctrl, mockService;

  beforeEach(module(function($provide) {
    mockService = {
      list: function() {
        return [{id: 1, label: 'Mock'}];
      }
    };

    $provide.value('ItemService', mockService);
  }));

  beforeEach(inject(function($controller) {
    ctrl = $controller('ItemCtrl');
  }));

  it('should load mocked out items', function() {
    expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
  });

});


/*In the unit test above, the start of the test is similar, where we instantiate our module, 
the notesApp1.
After that, we have another beforeEach, which is where we override the ItemService
with our own mock.
We use the module function, but instead of giving it the name of the module,
we give it a function which gets injected with a $provide. This provider shares its namespace with
the modules loaded before.

So now, we create our mockService, and then tell the provider that when any
controller or service asks for ItemService, give it our value. Since we do this after the notesApp1 module
is loaded, it overwrites the original ItemService definition.
The rest of the unit test proceeds the same
as before, except we now check the value of items in the controller is what is returned by our mock instead
of the original service.*/