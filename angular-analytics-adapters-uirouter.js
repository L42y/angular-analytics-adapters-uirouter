angular.module('l42y.analytics.adapters.uirouter', [
  'ui.router',
  'l42y.analytics'
]).run(function (
  $location,
  $rootScope,
  Analytics
) {
  $rootScope.$on('$stateChangeSuccess', function ($event, toState) {
    Analytics.page($location.url());
  });
});
