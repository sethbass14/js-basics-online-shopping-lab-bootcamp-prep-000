var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  cart.push({[itemName] : (Math.floor(Math.random() * 100) + 1)})
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
  string = "In your cart, you have "
  if (cart.length === 0) {
    string = "Your shopping cart is empty."
  } else if (cart.length === 1) {
      string = string + `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
  } else if (cart.length === 2) {
      string = string + `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
  } else {
    for (var i = 0; i < cart.length - 1; i++) {
      string = string + `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `
    }
    string = string + `and $${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
  }
  return string
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
