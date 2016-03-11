'use strict';

angular.module('teamboxApp')
  .controller('TeamCtrl', function ($scope) {
    $scope.members = [
      {
        "avatar": "data/members/person-1.png",
        "position": "Co Founder",
        "view": "large",
        "name": "Clarine Vassar",
        "brief": "Designing often necessitates considering the aesthetic, functional, economic and sociopolitical dimensions of both the design object and design process. It may involve considerable research, thought, modeling, interactive adjustment, and re-design. "
      },
      {
        "avatar": "data/members/person-2.png",
        "position": "CEO",
        "view": "large",
        "name": "Brooks Latshaw",
        "brief": "Designing often necessitates considering the aesthetic, functional, economic and sociopolitical dimensions of both the design object and design process. It may involve considerable research, thought, modeling, interactive adjustment, and re-design. "
      },
      {
        "avatar": "data/members/person-3.png",
        "position": "Business Analyst",
        "view": "large",
        "name": "Clementina Brodeur",
        "brief": "Designing often necessitates considering the aesthetic, functional, economic and sociopolitical dimensions of both the design object and design process. It may involve considerable research, thought, modeling, interactive adjustment, and re-design. "
      },
      {
        "avatar": "data/members/person-4.png",
        "position": "Engineering",
        "view": "large",
        "name": "Carri Busey",
        "brief": "Designing often necessitates considering the aesthetic, functional, economic and sociopolitical dimensions of both the design object and design process. It may involve considerable research, thought, modeling, interactive adjustment, and re-design. "
      },
      {
        "avatar": "data/members/person-5.png",
        "position": "Designer",
        "name": "Melissa Dock",
        "view": "large",
        "brief": "Designing often necessitates considering the aesthetic, functional, economic and sociopolitical dimensions of both the design object and design process. It may involve considerable research, thought, modeling, interactive adjustment, and re-design. "
      },
      {
        "avatar": "data/members/person-6.png",
        "position": "Design Manager",
        "name": "Clay Peskin",
        "view": "large",
        "brief": "Designing often necessitates considering the aesthetic, functional, economic and sociopolitical dimensions of both the design object and design process. It may involve considerable research, thought, modeling, interactive adjustment, and re-design. "
      },
      {
        "avatar": "data/members/person-7.png",
        "position": "UI/UX",
        "name": "Winford K.",
        "view": "large",
        "brief": "Designing often necessitates considering the aesthetic, functional, economic and sociopolitical dimensions of both the design object and design process. It may involve considerable research, thought, modeling, interactive adjustment, and re-design. "
      }
    ]
    ;
  });
