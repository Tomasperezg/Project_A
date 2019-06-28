"use strict";
angular.
  module('App').
  component('projects', {
    templateUrl: "projects.html",
    controller: function ProjectController($http){
      var self = this;

      $http({
        method: 'GET',
        url: 'HomeProjects.json'
      }).then(function(response) {
          self.projectItems = response.data;
          console.log(self.projectItems);
          console.log("This is working");

        },function (error){
          console.log("There is an error");
  });

    }
  });
