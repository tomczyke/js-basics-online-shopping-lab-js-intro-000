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
  var newItem = { itemName: item, itemPrice: price };
  cart.push(newItem);
  //console.log(`${item} has been added to your cart.`);
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var statementArray = [];
  if (cart.length === 0){
    return "Your shopping cart is empty.";
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
