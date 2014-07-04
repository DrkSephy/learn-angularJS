// 1. Use a directive to ensure that we can only see the "Add to Cart" button if the
//    canPurchase property is true.
// 2. When a product is soldOut, hide the .product element.

(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Azurite',
    price: 110.50,
    canPurchase: false,
    soldOut: true
  };
})();
