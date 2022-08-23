export default function Cart({ cart }) {
  const cartItems = cart.map((item) => {
    return <h2>{item.species}</h2>;
  });

  return <div>{cartItems}</div>;
}
