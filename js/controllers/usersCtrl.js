app.controller('usersCtrl', ['$scope', '$http', function($scope, $http) {

	var getUsers = function() {
		$http.get("http://jsonplaceholder.typicode.com/users").success(function(data) {
			$scope.users = data;
		});
	}
	getUsers();

}]);
