powerDownApp.controller('SettingsCtrl', function ($scope, eventService) {
	var vm = this;

	eventService.getHttpExample_DateTime().then(function (response) {
		vm.dateTimeObj = response.data;
	});

	eventService.getHttpExample_IP().then(function (response) {
		vm.ipAddress = response.data.ip;
	});

});
