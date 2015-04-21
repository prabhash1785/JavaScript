powerDownApp.controller('HeaderCtrl', function (userService) {
	var vm = this;

	vm.togglePhoneNav = function () {
		$('.phoneNav').toggleClass('open');
	};

	vm.logout = function () {
		userService.logout();
	};

});
