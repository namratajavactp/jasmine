describe('ItemCtrl with spies', function() {
  beforeEach(module('notesApp1'));

  var ctrl1,ctrl2, itemService;

  beforeEach(inject(function($controller, ItemService) {
    spyOn(ItemService, 'list').andCallThrough();
    itemService = ItemService;
    ctrl1 = $controller('ItemCtrl');
	  // ctr2 = $controller('ItemCtrl');
  }));

  it('should load mocked out items', function() {
    expect(itemService.list).toHaveBeenCalled();
    expect(itemService.list.callCount).toEqual(1);
    expect(ctrl1.items).toEqual([
      {id: 1, label: 'Item 0'},
      {id: 2, label: 'Item 1'}
    ]);
  });
});



/*In the above code example, we introduce Jasmine spies. Jasmine spies allow you to hook onto existing functions, 
and check whether they have been called, and if so, how many times they were called and so on. We call the spyOn
 function with an object as the first argument, and a string with the function name that we want to hook on to as
 the second argument. In this example, we tell Jasmine to spy on the list function of the ItemService. We also tell 
 it to continue calling the actual service underneath by calling andCallThrough on the spy. This means we can check
 whether the function was called or not using Jasmine, and have the function work as it used to underneath.*/
 
 