'use strict'

angular.module('drag-example', ['ui.sortable']) // becomes 'as.sortable' in later versions

angular.module('drag-example')
.controller('main-ctrl', function($scope) {
  $scope.test = 'world'

  $scope.items = [
    { position: 1, name: "Division 1", price: "$5.00" },
    { position: 2, name: "Awesome Division", price: "$9.07" },
    { position: 3, name: "Dog Division", price: "$2.00" },
    { position: 4, name: "Cate Division", price: "$0.01" },
    { position: 5, name: "Mystery Land", price: "$8.00" }
  ]

  $scope.dragListeners = {
    orderChanged: function(event) {
      console.log('order changed', event)
      // console.log('item', event.source.itemScope.modelValue)
      // console.log('new order', event.dest.index)

      // DOESN'T WORK
      // var item = event.source.itemScope.modelValue
      // var newPosition = event.dest.index
      // item.position = newPosition
    },
    itemMoved: function(event) {
      console.log('moved changed', event)
    }
  }

})
