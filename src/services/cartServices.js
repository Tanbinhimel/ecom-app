let cart = [];

export default function getCart() {
  return cart;
}

export function saveCartItem(product) {
  let productInDb = cart.find((p) => p._id === product._id) || {};
  productInDb.productName = product.productName;
  productInDb.rating = product.rating;
  productInDb.price = product.price;

  if (!productInDb._id) {
    productInDb._id = Date.now().toString();
    cart.push(productInDb);
  }

  return productInDb;
}
