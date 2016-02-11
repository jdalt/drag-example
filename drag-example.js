'use strict'

angular.module('drag-example', [])

angular.module('drag-example')
.controller('main-ctrl', function($scope) {
  $scope.test = 'world'

  $scope.items = [
    { name: "Division 1", price: "$5.00" },
    { name: "Awesome Division", price: "$9.07" },
    { name: "Dog Division", price: "$2.00" },
    { name: "Cate Division", price: "$0.01" },
    { name: "Mystery Land", price: "$8.00" }
  ]

})
