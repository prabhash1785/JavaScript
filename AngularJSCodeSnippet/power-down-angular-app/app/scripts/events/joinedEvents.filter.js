powerDownApp.filter('joinedEvents', function () {
	return function (events, userId) {

		var filtered = [];

		if (events) {
			for (var i = 0; i < events.length; i++) {
				var event = events[i];
				for (var key in event.attendees) {
					if (key === userId) {
						filtered.push(event);
						break;
					}
				}
			}
		}

		return filtered;
	};
});
