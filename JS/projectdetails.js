"use strict";
angular.
  module('homeApp').
  component('projectDetail', {
    templateUrl: "projectdetail.html",
    controller: ['$http', '$routeParams',
    function homeDetailController ($http, $routeParams, $timeout){
      var self = this;
      // initial image index
      self._Index = 0;


      $http({
        method:'GET',
        url: 'JSON/'+ $routeParams.ItemID + '.json'
      }).then(function(response) {
          self.home = response.data;
          self.Images = response.data[self._Index].Images;

          console.log(self.Images);
          console.log(self.home);
          console.log("Detail of home working");
        },function (error){
          console.log("There is an error");
        });

        // if a current image is the same as requested image

          self.isActive = function (index) {
              return self._Index === index;
          };

        // show prev image
        self.showPrev = function () {
            self._Index = (self._Index > 0) ? --self._Index : self.Images.length - 1;
            console.log("PREV");

        };
        // show next image
        self.showNext = function () {
            self._Index = (self._Index < self.Images.length - 1) ? ++self._Index : 0;
            console.log("Next");

        };
        // show a certain image
        self.showPhoto = function (index) {
            self._Index = index;
        };

    }

]

});
