"use strict";
angular.
  module('homeApp').
  component('projects', {
    templateUrl: "projects.html",
    controller: function ProjectController($timeout, $http){
      var self = this;
      var delaytime = 500;
      $timeout(function(){
          $http({
            method: 'GET',
            url: 'JSON/HomeProjects.json'
          }).then(function(response) {
              self.projectItems = response.data;
              console.log(self.projectItems);
              console.log("This is working");

            },function (error){
              console.log("There is an error");
            });
      },delaytime);
    }
  });
