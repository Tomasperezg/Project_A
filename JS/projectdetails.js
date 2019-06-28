"use strict";
angular.
  module('homeApp').
  component('projectdetail', {
    templateUrl: "projectdetail.html",
    controller: function homeDetailController ($http, $routeParams){
      var self = this;

      $http({
        method:'GET',
        url: 'HomeProjects'+ $routeParams.ItemID + '.json'
      }).then(function(response) {
          self.home = response.data;
          console.log(self.home);
          console.log("Detail of home working")

        },function (error){
          console.log("There is an error");
        });
    }


});
