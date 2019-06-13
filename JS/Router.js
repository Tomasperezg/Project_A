"use strict";
{
  angular
    .module("App")
    .config(($routeProvider) => {
      $routeProvider
        .when("/home", {
          template: "<home></home>"
        })
        .when("/projects", {
          template: "<projects></projects>"
        })
        .otherwise({redirecTo: "/home"});
    });
}
