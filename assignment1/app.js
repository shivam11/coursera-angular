(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.foodEaten = "";
  $scope.numfoodEaten = 0;
  $scope.msg="";
  
  $scope.checkLunch = function () {
    
    var totalNameValue = calculateFoodEaten($scope.foodEaten);
    $scope.numfoodEaten = totalNameValue;
    if($scope.numfoodEaten==0)
    {
        $scope.msg="Please enter data first";
    }
    else{
      if($scope.numfoodEaten>0 && $scope.numfoodEaten<=3)
      {
        $scope.msg="Enjoy!";
      }
      else{$scope.msg="Too Much!";}
    }
  };

  function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
     console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
    return arrayOfStrings;
  }

  function calculateFoodEaten(string) {
    var totalStringValue = 0;
   var text=string.trim();
    console.log(text);
    var comma = ',';
    var foodList = splitString(text,comma);
    var filteredArray = [];
    angular.forEach(foodList, function(item) {
        if (item.trim()!=="") filteredArray.push(item);
      });
   
    totalStringValue = filteredArray.length;
    return totalStringValue;
  }

});


})();
