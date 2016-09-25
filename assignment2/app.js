(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyItems = this;

  toBuyItems.items = ShoppingListCheckOffService.getToBuyItems();
  console.log(toBuyItems.items.length);

  toBuyItems.buyItem=function(itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtItems = this;

  boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
  console.log(boughtItems.items.length);
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItemList = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];
  var boughtItemList = [];

  service.buyItem = function (itemIdex){
    this.addItem(toBuyItemList[itemIdex].name,toBuyItemList[itemIdex].quantity);
    this.removeItem(itemIdex);
  };
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtItemList.push(item);
  };

  service.removeItem = function (itemIdex) {
    toBuyItemList.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    console.log(toBuyItemList);
    return toBuyItemList;
  };

  service.getBoughtItems = function () {
    return boughtItemList;
  };
}

})();
