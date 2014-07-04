// 1. Assign gems to a products property inside StoreController
// 2. Use the correct directive to display all products in product row divs. 
(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
   this.products = gems; 
  });

  var gems = [
    { name: 'Azurite', price: 2.95 },
    { name: 'Bloodstone', price: 5.95 },
    { name: 'Zircon', price: 3.95 },
  ];
})();
