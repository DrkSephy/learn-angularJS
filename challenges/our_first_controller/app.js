// 1. Add a controller named StoreController to our gemStore application.
// 2. Attach the StoreController to the <body> tab. Be sure to alias it as store. 
// 3. In app.js, we've added a gem object to represent one of the products in our
//    gemStore. Assign it to the product property of StoreController so we can use
//    them in the page. 
// 4. Display the name of the product inside the <h3> tag. 

(function(){
  var gem = { name: 'Azurite', price: 2.95 };
  var app = angular.module('gemStore', []);
  
  app.controller('StoreController', function(){
    this.product = gem;
  });
})();
