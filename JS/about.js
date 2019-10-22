"use strict";
angular.
  module('homeApp').
  component('about', {
    templateUrl: "about.html",
    controller: function AboutControl (){
      var self = this;
      self._Index = 0;
      self.AboutHeroBNR = [
        {AboutBNR: "Images/Home3.jpg", alter: "This is the image of home 1 kitchen "}
      ];
      self.aboutCustomerComm = [
        {comments: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet", userName: "Lorem ipsum dolor sit amet"},
        {comments: "Lorem ipsum dolor sit amet.", userName: "Lorem ipsum dolor sit amet."}
      ];
      console.log(self.aboutCustomerComm.length);

      // if a current image is the same as requested image
      self.isActive = function (index) {
          return self._Index === index;
          console.log(self._Index);
      };
      // show prev image
      self.showPrev = function () {
          self._Index = (self._Index > 0) ? --self._Index : self.aboutCustomerComm.length - 1;
          console.log("PREV");

      };
      // show next image
      self.showNext = function () {
          self._Index = (self._Index < self.aboutCustomerComm.length - 1) ? ++self._Index : 0;
          console.log("Next");

      };
      // show a certain image
      self.showPhoto = function (index) {
          self._Index = index;
      };
    }
  });
