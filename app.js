(function() {
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    // fixed from: https://stackoverflow.com/questions/41169385/http-get-success-is-not-a-function
    $http.get('/api/products.json').then(function(response){
        store.products = response.data;
    });
  }]);

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

})();
