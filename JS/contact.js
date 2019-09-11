"use strict";

angular.
  module('homeApp').
  component('contact', {
    templateUrl: "contact.html",
    controller: function contactControl(){
      var self = this;
      self.ContactHeroIMG = [
        {ContHero: "Images/Home2.jpg", alt: "This is the hero image of the contact page"}
      ];
      self.backgroundImg = [
        {bg: "Images/ContactIMG.jpg", alt: "Lovely kitchen home background"}
      ];
    }
  });
