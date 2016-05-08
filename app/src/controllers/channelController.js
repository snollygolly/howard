const app = angular.module("howardApp", []);

app.controller("channelController", ($scope, $http) => {
	$http({
		method: "GET",
		url: "/api/v1/channels"
	}).then((response) => {
		console.log("WE GOT THE DATA FROM THE API!");
		console.log(response);
		$scope.channels = response.data.channels;
		$scope.message = "WE GOT A RESPONSE FROM THE API";
	}, (err) => {
		console.error("OH NO, SOMETHING WENT WRONG WITH THE API!");
		$scope.message = "OH NO, SOMETHING WENT WRONG WITH THE API!";
	});
});
