export default function Cart({ cart }) {
  const cartItems = cart.map((item) => {
    return (
      <li className="cartItem" key={item.id}>
        <h2>{item.species}</h2>
        <button>Remove from cart</button>
      </li>
    );
  });

  return <ul>{cartItems}</ul>;
}
