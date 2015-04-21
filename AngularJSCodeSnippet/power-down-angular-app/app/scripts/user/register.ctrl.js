powerDownApp.controller('RegisterCtrl', function (userService) {
	var vm = this;

	vm.registerModel = {};

	vm.register = function () {
		userService.register(vm.registerModel.userName, vm.registerModel.email, vm.registerModel.password)
	};


});
