/*The mock we created in previous example would only be usable within this particular describe block.
 To change the above to be a more reusable, general purpose mock of the ItemService, we could do the following:*/



angular.module('notesApp1Mocks', [])
  .factory('ItemService', [function() {
    return {
      list: function() {
        return [{id: 1, label: 'Mock'}];
      }
    };
  }]);
  
  /*What we had hardcoded in the mockService has been extracted out into a service with the same name, but in a
  different module named notesApp1Mocks. This file will reside in the test folder, and be included by karma.conf.js,
  but not in our live application. */