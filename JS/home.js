"use strict";

angular.
  module('App').
  component('home', {
    templateUrl: "home.html",
    controller: function controller2() {
      this.Images = [
        {CarImg: "Images/Hero_1.jpg", alter: "This is image 1"}
      ];
    }
  });
