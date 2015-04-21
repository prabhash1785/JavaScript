powerDownApp.directive('accordionSection', function () {
	return {
		restrict: 'EA',
		scope: {
			title: '@',
			openByDefault: '@'
		},
		transclude: true,
		templateUrl: '/views/_common/accordion.html',
		link: function ($scope, $element, $attrs) {

			var contentSection = $element.find('.contentSection');

			//$scope.expanded = !($attrs.openByDefault && $attrs.openByDefault === 'false');
			$scope.expanded = $scope.openByDefault ? $scope.$eval($scope.openByDefault) : true;

			if (!$scope.expanded) {
				contentSection.css('display', 'none');
			}

			$scope.toggleExpanded = function () {
				$scope.expanded = !$scope.expanded;
				if ($scope.expanded) {
					contentSection.css('display', 'block');
				} else {
					contentSection.css('display', 'none');
				}
			};

		}
	}
});
