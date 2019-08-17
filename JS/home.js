"use strict";

angular.
  module('homeApp').
  component('home', {
    templateUrl: "home.html",
    controller: function controller2() {
      var self = this;
      self.Images = [
        {CarImg: "Images/MainHomeIMG.jpg", alter: "This is image 1", change: "1"}
      ];
      self.LogoI = [
        {LogoImg: "Images/Logo.webp", text: "This is the company logo"}
      ];
      self.HomeProIMG = [
        {ProIMG: "Images/Hero_2.jpg", desc: "This is an example of one project"}
      ];

    }

  });
