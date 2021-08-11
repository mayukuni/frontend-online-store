/**
 * id, title, image, price, freeShipping
 */

export async function saveCartToLocalStorage(cart) {
}

export async function loadCartFromLocalStorage() {
  return [
    {
      id: 1,
      title: 'cama',
      image: 'asdads',
      price: 20,
      freeShipping: false,
    },
    {
      id: 2,
      title: 'mesa',
      image: 'asdads',
      price: 10,
      freeShipping: true,
    },
  ];
}
