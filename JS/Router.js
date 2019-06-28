"use strict";
{
  angular
    .module("homeApp")
    .config(($routeProvider) => {
      $routeProvider
        .when("/home", {
          template: "<home></home>"
        })
        .when("/projects", {
          template: "<projects></projects>"
        })
        .otherwise({redirectTo: "/home"});
    });
}
