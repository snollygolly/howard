const app = angular.module("howardApp", []);

app.controller("channelController", ($scope, $http) => {
	$http({
		method: "GET",
		url: "/api/v1/channels"
	}).then((data) => {
		console.log("WE GOT THE DATA FROM THE API!");
		$scope.channels = data;
	}, (err) => {
		console.error("OH NO, SOMETHING WENT WRONG WITH THE API!");
	});
});
