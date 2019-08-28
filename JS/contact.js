"use strict";

angular.
  module('homeApp').
  component('contact', {
    templateUrl: "contact.html",
    controller: function contactControl(){
      var self = this;

      self.backgroundImg = [
        {bg: "Images/ContactIMG.jpg", alt: "Lovely kitchen home background"}
      ];
    }
  });
