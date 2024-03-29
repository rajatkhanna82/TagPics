
'use strict';

angular.module('hackathonApp')

.directive('slider', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs) {},
    templateUrl: 'partial/slider.html'
  };
});