powerDownApp.controller('EventSummaryCtrl', function ($stateParams, $rootScope, eventService) {
	var vm = this;
	vm.joined = false;

	eventService.getEvent($stateParams.eventId).then(function (event) {
		vm.event = event;
		if ($rootScope.activeUser && vm.event.attendees) {
			for (var key in vm.event.attendees) {
				if (key === $rootScope.activeUser.id) {
					vm.joined = true;
					break;
				}
			}
		}
	});

	vm.joinEvent = function () {
		eventService.joinEvent($stateParams.eventId, $rootScope.activeUser);
		vm.joined = true;
	};

	vm.leaveEvent = function () {
		eventService.leaveEvent($stateParams.eventId, $rootScope.activeUser.id);
		vm.joined = false;
	};

});
