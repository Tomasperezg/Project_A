"use strict";

angular.
  module('homeApp').
  component('home', {
    templateUrl: "home.html",
    controller: function controller2() {
      var self = this;
      self.Images = [
        {CarImg: "Images/Hero_1.jpg", alter: "This is image 1", change: "1"},
      ];
      self.LogoI = [
        {LogoImg: "Images/Logo.webp", text: "This is the company logo"}
      ];

    }

  });
