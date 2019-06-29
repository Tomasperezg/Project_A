"use strict";
angular.
  module('homeApp').
  component('projectDetail', {
    templateUrl: "projectdetail.html",
    controller: ['$http', '$routeParams',
    function homeDetailController ($http, $routeParams){
      var self = this;

      $http({
        method:'GET',
        url: 'JSON/'+ $routeParams.ItemID + '.json'
      }).then(function(response) {
          self.home = response.data;
          console.log(self.home);
          console.log("Detail of home working")

        },function (error){
          console.log("There is an error");
        });
    }
]

});
