"use strict";

angular.
  module('homeApp')
  .component('projects', {
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

              self.QueryArray = [];

              for (var i = 0; i < self.projectItems.length; i++){
                for (var k = 0; k < self.projectItems[i].typ.length; k++){
                  self.QueryArray.push(self.projectItems[i].typ[k]);
                }
              }

              self.uniqueTypes= self.QueryArray.filter(function(myItem, index){
      				      return self.QueryArray.indexOf(myItem) == index;
      				});

              self.customFilter=function(myItem){
                if(myItem===null){
                   return "";
                }
                else{
                  return myItem;
                }
              }

              console.log(self.projectItems);
              console.log(self.QueryArray);
              console.log("This is working");

            },function (error){
              console.log("There is an error");
            });

      },delaytime);
    }
  });
