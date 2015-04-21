powerDownApp.controller('LoginCtrl', function (userService) {
	var vm = this;

	vm.loginModel = {};

	vm.login = function () {
		userService.login(vm.loginModel.email, vm.loginModel.password);
	};

});
