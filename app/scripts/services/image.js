'use strict';

angular.module('hackathonApp')
  .factory('ImageFactory', function ($resource) {
    return $resource('/api/images', {
      id: '@id'
    }, { //parameters default
      update: {
        method: 'POST',
        params: {}
      },
   
	  });
  });
