"use strict";
angular.
  module('homeApp').
  component('about', {
    templateUrl: "about.html",
    controller: function AboutControl (){
      var self = this;

      self.AboutHeroBNR = [
        {AboutBNR: "Images/Home3.jpg", alter: "This is the image of home 1 kitchen "}
      ];
      self.aboutCustomerComm = [
        {comments: "This is an example of a customer comment", userName: "some name"},
        {comments: "This is an example of a customer comment(2)", userName: "some name(2)"}
      ];
    }
  });
