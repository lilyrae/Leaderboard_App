'use strict';

// Declare app level module which depends on views, and components
angular.module('LeaderboardApp', [
  'LeaderboardApp.controllers',
  'ngRoute'
])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when("/members", {templateUrl: "partials/members.html", controller: "membersController"})
			.when("/member/:id", {templateUrl: "partials/member.html", controller: "memberController"})
			.otherwise({redirectTo: "/members"});
	}]);
