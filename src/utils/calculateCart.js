export function calculateCart(subtotal) {
  const shipping = subtotal > 80 ? 0 : 8;

  const tax = Number((subtotal * 0.1).toFixed(2));

  const total = subtotal + shipping + tax;

  return {
    shipping,
    tax,
    total,
  };
}
