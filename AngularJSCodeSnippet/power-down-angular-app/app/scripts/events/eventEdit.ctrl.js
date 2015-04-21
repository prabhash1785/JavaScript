powerDownApp.controller('EventEditCtrl', function ($firebase, $stateParams, $rootScope, eventService) {
	var vm = this;

	eventService.getEvent($stateParams.eventId).then(function (eventObj) {
		vm.eventModel = eventObj;
	});

	vm.editEvent = function () {
		vm.eventModel.$save();  // firebase method to upate 3-way-binded object in database
		$rootScope.$broadcast('addAlert', {type: 'success', msg: 'Event details updated.'});
	};

	vm.removeAttendee = function (id) {
		eventService.leaveEvent($stateParams.eventId, id);
	};

});
