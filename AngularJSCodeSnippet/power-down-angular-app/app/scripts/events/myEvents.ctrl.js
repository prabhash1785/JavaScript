powerDownApp.controller('MyEventsCtrl', function ($firebase, eventService) {
	var vm = this;

	eventService.getAllEvents().then(function (data) {
		vm.events = data;
	});

});
