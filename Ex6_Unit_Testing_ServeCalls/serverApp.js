angular.module('serverApp', [])
  .controller('MainCtrl', ['$http', function($http) {
    var self = this;
    self.items = [];
    self.errorMessage = '';

    $http.get('/api/note').then(function(response) {
      self.items = response.data;
    }, function(errResponse) {
      self.errorMessage = errResponse.data.msg;
    });
  }]);
  
  
  
  
  /* In the code snippet above, we have a very simple controller, which makes a GET request to /api/note when it loads,
  and saves the response into the items array on the controller.
  In case of an error, it saves the error message on the controller’s instance.*/