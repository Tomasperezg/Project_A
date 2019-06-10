"use strict";
{
  angular
    .module("App")
    .config(($routeProvider) => {
      $routeProvider
        .when("/home", {
          template: "<home></home>"
        })
        .otherwise({redirecTo: "/home"});
    });
}
