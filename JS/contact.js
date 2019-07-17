"use strict";

angular.
  module('homeApp').
  component('contact', {
    templateUrl: "contact.html",
    controller: function contactControl(){
      var self = this;

      self.backgroundImg = [
        {bg: "Images/MainHomeIMG.jpg", alt: "Lovely home background"}
      ];
    }
  });
