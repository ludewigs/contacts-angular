app.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when ("/", {
			templateUrl: "view/home.htm"
		})
		.when ("/users", {
			templateUrl: "view/users.htm",
			controller: "usersCtrl"
		})
		.when ("/editUser:id", {
			templateUrl: "view/editUser.htm",
			controller: "editUserCtrl"
		})
		.when ("/about", {
			templateUrl: "view/about.htm"
		})
		.otherwise ({
			redirectTo: "/users"
		});

}]);
