'use strict'

angular.module('drag-example', ['dndLists']) // becomes 'as.sortable' in later versions

angular.module('drag-example')
.controller('main-ctrl', function(
  $scope
) {

  $scope.test = 'world'

  $scope.list = [
    { id: 1, type: 'Team', name: "Packers" },
    { id: 2, type: 'Team', name: "Badgers" },
    { id: 3, type: 'Team', name: "Brewers" },
    { id: 4, type: 'Team', name: "Bucks" },
    { id: 5, type: 'Team', name: "Admirals" }
  ]

  $scope.targetList = [
    { id: 1, stage_rank: 1, division_rank: 1, competitor: { name: 'Wackers' } },
    { id: 1, stage_rank: 2, division_rank: 2 },
    { id: 1, stage_rank: 3, division_rank: 3 },
    { id: 1, stage_rank: 4, division_rank: 1 },
    { id: 1, stage_rank: 5, division_rank: 2 },
    { id: 1, stage_rank: 6, division_rank: 3 }
  ]

  $scope.deadDrop = function(dropItem, targetItem) {
    if(targetItem.competitor) {
      $scope.list.push(targetItem.competitor)
    }

    targetItem.competitor = dropItem
    _.remove($scope.list, dropItem)
  }

  $scope.mark = function() {
    debugger
  }

})
