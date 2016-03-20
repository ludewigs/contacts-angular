app.controller('editUserCtrl', ['$scope','$http', '$route', '$location', function($scope, $http, $route, $location){

	var userId = $route.current.params.id.substring(1);

	var editUser = function() {
		$http.get("http://jsonplaceholder.typicode.com/users/" + userId).success(function(data) {
			$scope.details = data;
		}).error(function(data) {
			$scope.error = "error retrieving data";
		});
	}

	$scope.saveUser = function(details) {
		$http.put("http://jsonplaceholder.typicode.com/users/" + userId, details);
		$location.path("/users");
	}

	editUser();

}])