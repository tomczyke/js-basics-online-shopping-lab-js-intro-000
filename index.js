var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var price = Math.floor(Math.random() * 100);
  var itemObject = { [item]: price};
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`);
  return itemObject;
}

function viewCart() {
  // write your code here
  var statementArray = [];
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } else {
    for (var i = 0; i < cart.length; i++) {
      var itemAndPrice = cart[i];
      var itemName = Object.keys(cart[i]);
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
