'use strict';

angular.module('hackathonApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.currentIndex  = 0;
    $http.get('/api/images').success(function(images) {
      $scope.tempImgs = images; 
      // $scope.imageClick = function(){
      //   $scope.currentIndex = 
      // };
      $scope.next  = function(){
        console.log($scope.images);
        if($scope.currentIndex >= $scope.images.length-1){
          $scope.currentIndex =0;
        }else{
           $scope.currentIndex++;
        }
   
      };
      $scope.prev  = function(){
        if($scope.currentIndex <= 0){
          $scope.currentIndex = $scope.images.length -1;
        }else{
           $scope.currentIndex--;
        }
        
      };
      $scope.openImage = function(clickedImage){
        console.log($scope.images.indexOf(clickedImage));
           $scope.currentIndex = $scope.images.indexOf(clickedImage);
      };
      $scope.change = function(){
        // console.log("the search is changing .....",$scope.tempImgs);
       if (!angular.isUndefined($scope.tempImgs) && !angular.isUndefined($scope.search) && $scope.search.length > 0) {
          var tempImages = [];
          // console.log($scope.tempImgs);
          $scope.tempImgs.forEach(function (image) {
             // console.log( image['tags'].indexOf($scope.search));
              if (image['tags'].indexOf($scope.search) !== -1){
                  tempImages.push(image);
              }
          });
          // console.log(tempImages);

          $scope.images = tempImages;
      } else {
          $scope.images = $scope.tempImgs;
      }
    };
   
    
    $scope.images = $scope.tempImgs;
    console.log($scope.images);
     console.log($scope.currentTags);

    });
  });

