powerDownApp.controller('CreateEventCtrl', function (eventService, $rootScope) {
	var vm = this;

	vm.eventModel = {};

	vm.createEvent = function () {
		eventService.createEvent({
			name: vm.eventModel.name,
			type: vm.eventModel.type,
			description: vm.eventModel.description,
			organizer: {
				id: $rootScope.activeUser.id,
				userName: $rootScope.activeUser.userName
			}
		});
	};
});
