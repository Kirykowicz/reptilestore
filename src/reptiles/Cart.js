export default function Cart({ cart }) {
  const cartItems = cart.map((item) => {
    return (
      <li className="cartItem">
        <h2>{item.species}</h2>
        <button>remove from cart</button>
      </li>
    );
  });

  return <ul>{cartItems}</ul>;
}
