// Abstraction layer over Angular UI Bootstrap Alert module v0.11
// - Add alerts that will disappear in 2.5 seconds, or custom time length
// * mstelten 8/23/14 *


powerDownApp.controller('AlertsCtrl', function ($scope, $timeout) {

	$scope.alerts = [];

	$scope.$on('addAlert', function (event, alertObj, duration) {
		var newAlertObj = alertObj;
		newAlertObj.uid = Math.floor(Math.random() * 100000);
		var alertIndex;

		$scope.alerts.push(newAlertObj);
		$scope.$safeApply();

		if (duration !== 'stay') {
			$timeout(function () {
				for (var i = 0; i < $scope.alerts.length; i++) {
					if ($scope.alerts[i].uid === newAlertObj.uid) {
						alertIndex = i;
						break;
					}
				}
				$scope.alerts.splice(alertIndex, 1);
			}, duration || 2500);
		}

	});

	$scope.closeAlert = function (index) {
		$scope.alerts.splice(index, 1);
	};

});
