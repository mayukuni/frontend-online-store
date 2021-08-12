/**
 * product: { id, title, image, price, freeShipping }
 * item: { quantity, product }
 */
export const cartItens = [];

export function addProductToCart(product) {
  const foundIndex = cartItens.findIndex((item) => item.product.id === product.id);
  if (foundIndex >= 0) {
    cartItens[foundIndex].quantity += 1;
  } else {
    cartItens.push({
      quantity: 1,
      product,
    });
  }
  console.log('foi');
}
