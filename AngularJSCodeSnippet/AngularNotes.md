Angular Notes:
---------------
git@bitbucket.org

https://mstelten@bitbucket.org/frontedgedigital/power-down-angular-app.git

Slides: http://frontedgedigital.com/angular-course/#/22


angular.module -> global place for creating, registr=ering and retrieving angular modules


Angular creates a watch internally on all data-binding.
Call $scope.$apply() to manually trigger a $digest cycle

Scopes are hierarchical:
$.rootScope   (every app has one eroot scope)
|
$scope (UI-View)
|
Scope   Scope
|
Directive isolated scope


Directive Link Function:  Used to register a call function with behaviors. This is run after compilation and controller have run. Use link in a directive to do DOM Manipulation.

Note: Don't use DOM.ready with Angular app because DOM would not know about Angular dynamic pages.

Directive Transclusion:


Providers are only used with config.



Exercise:
Filed Needed:
 - _app.js -> create module, in commons directory
 - index.html -> ng-app, ui-view
 - router.js -> config function() with router
 - use route ('/')
 	- view ---> allmovies.html
 	- controller









Follow ups:
Client side rendering and server side rendering