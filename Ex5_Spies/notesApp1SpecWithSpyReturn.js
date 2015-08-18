describe('ItemCtrl with SpyReturn', function() {
  beforeEach(module('notesApp1'));

  var ctrl, itemService;

  beforeEach(inject(function($controller, ItemService) {

    spyOn(ItemService, 'list')
        .andReturn([{id: 1, label: 'Mock'}]);
    itemService = ItemService;
    ctrl = $controller('ItemCtrl');
  }));

  it('should load mocked out items', function() {
    expect(itemService.list).toHaveBeenCalled();
    expect(itemService.list.callCount).toEqual(1);
    expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
  });
});
/*In the example above, we override the list method in the ItemService, and replace it with our Jasmine spy.
The spyOn function returns a spy that is called with the andReturn function on the spy created by createSpy,
and giving it the value to return. Note we do this before creating our controller, which is recommended.
Then, in our unit test, we can check if ItemService.list was called, and if it was called once. Also, the value
in the controllers items array is now what we specify our spy returns (specified with the andReturn on the createSpy function).*/