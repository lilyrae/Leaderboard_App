angular.module('LeaderboardApp.controllers', [])
	/* Members controller */
	.controller('membersController', function($scope) {
	    $scope.membersList = [
	      {
	        nickname: 'Lolatron',
	        firstName: 'Lily',
	        points: 322,
	        location: 'Finland',
	        job: 'Developer',
	        description: 'Coolest person ever'
	      },
	      {
	        nickname: 'Absolutely',
	        firstName: 'Fauve',
	        points: -322,
	        location: 'England',
	        job: 'Actress',
	        description: 'An alright sort of person'
	      }
	    ];
	})

  /* Member controller */
  .controller('memberController', function($scope, $routeParams) {
    $scope.id = $routeParams.id;
    
    $scope.membersList = [
	      {
	      	id: 0,
	        nickname: 'Lolatron',
	        firstName: 'Lily',
	        points: 322,
	        location: 'Finland',
	        job: 'Developer',
	        description: 'Coolest person ever'
	      },
	      {
	      	id: 1,
	        nickname: 'Absolutely',
	        firstName: 'Fauve',
	        points: -322,
	        location: 'England',
	        job: 'Actress',
	        description: 'An alright sort of person'
	      }
	    ];

    $scope.member = $scope.membersList[$scope.id];
    
  });