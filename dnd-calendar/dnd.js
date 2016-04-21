'use strict'

angular.module('drag-example', ['dndLists']) // becomes 'as.sortable' in later versions

angular.module('drag-example')
.factory('_', ['$window', function($window) {
  return $window._
}])

angular.module('drag-example')
.controller('main-ctrl', function(
  $scope,
  _
) {

  $scope.test = 'world'

  $scope.gameList = [
    { id: 1, home_seed: "Packers", away_seed: "Vikings", duration: 120 },
    { id: 2, home_seed: "Giants", away_seed: "Vikings", duration: 150 },
    { id: 3, home_seed: "Saints", away_seed: "Chargers", duration: 180 },
    { id: 4, home_seed: "Vandals", away_seed: "Ducks", duration: 120 }
  ]




  $scope.timeStep = 30

  $scope.rebuildIncrements = function() {
    var startTime = 320
    var timeSlotDuration = 720
    var steps = timeSlotDuration/$scope.timeStep
    $scope.incrementList = []

    _.times(steps, function(index) {
      $scope.incrementList.push({
        duration: $scope.timeStep,
        minute: (index * $scope.timeStep + startTime)
      })
    })
  }

  $scope.rebuildIncrements()

  $scope.deadDrop = function(gameDrop, targetItem) {
    // TODO: make sure dropable
    console.log('dropItem', gameDrop, 'targetItem', targetItem)
    targetItem.ownsGame = true

    targetItem.minute
    var disableIncrements = _.filter($scope.incrementList, function(increment) {
      return (targetItem.minute <= increment.minute) && (increment.minute < (targetItem.minute + gameDrop.duration))
    })

    _.each(disableIncrements, function(item) {
      item.game = gameDrop
    })

    console.log('disableIncrements', disableIncrements)
  }

  $scope.removeGame = function(game) {
    var affectedIncrements = _.filter($scope.incrementList, function(increment) {
      return increment.game && (increment.game.id == game.id)
    })

    _.each(affectedIncrements, function(item) {
      item.ownsGame = false
      item.game = null
    })
  }

  $scope.setGameDuration = function(game) {
    $scope.gameSteps = game.duration / $scope.timeStep
  }

  $scope.mark = function() {
    debugger
  }

})
