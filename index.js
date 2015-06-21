(function(){
  'use strict';

  /**
   * Angular Directive for Bootstrap Navigation. Checks the current value of $location and triggers active states on links..
   * @directive ks-active-link
   * @param {String} active-class
   * @param {String} active-path Top level navigation, checks against the prefix of all routes.
   * @param {String} active-view Sub page navigation, checks against the suffix of all routes. 
   * @example <li class="dropdown" ks-active-link active-class="active" active-path="/input_filters,/input_users">
   */
  
  angular
    .module('ks.activeLink', [])
    .directive('ksActiveLink', ksActiveLink);

  ksActiveLink.$inject = ['$location'];

  function ksActiveLink($location){
    var directive = {
      scope: {
        activeClass: '@',
        activePath: '@',
        activeView: '@'      
      },
      link: ksActiveLinkController
    };

    return directive;

    function ksActiveLinkController(scope, element, attrs) {
      var _klass = scope.activeClass || 'active';

      _searchCurrentLocationPath($location.$$path);

      scope.$on('$routeChangeSuccess', function(next, current) { 
        if(!current.$$route) { return false; }
        _searchLocationPath(current.$$route.originalPath);
      });

      function _searchCurrentLocationPath(location) {
        if (scope.activePath) {
          _activePath(location);
        } 
        if (scope.activeView) {
          _activeView(location);
        }
      }

      function _activePath(location) {
        var _paths = _splitPaths(scope.activePath);

        _paths.forEach(function(path){
          var result = location.search(path);
          
          if(result !== -1 && result <= 0){
            _addClass();
            //return false
          } else {
            _removeClass();
          }
        });
      }

      function _activeView(location) {
        var _parths = _splitPaths(scope.activeView);

        _paths.forEach(function(path){
          var result = location.search(path);
          var lastRoute = location.lastIndexOf('/');

          if(result !== -1 && result === lastRoute){
            _addClass();
            //return false
          } else {
            _removeClass();
          }
        });
      }

      function _addClass() {
        element.addClass(_klass);
      }

      function _removeClass() {
        element.removeClass(_klass);
      }

      function _splitPaths(paths) {
        return paths.split(',');
      }
    }
  }
})();