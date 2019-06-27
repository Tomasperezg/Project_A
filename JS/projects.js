"use strict";
angular.
  module('App').
  component('projects', {
    templateUrl: "projects.html",
    controller: function ProjectController($scope, $http){
      var self = this;

      $http({
        method: 'GET',
        url: 'HomeProjects.json'
      }).then(function (data){
          $scope.projects = data;
          console.log($scope.projects);
          console.log("This is working");

        },function (error){
          console.log("There is an error");
  });

    }
  });
