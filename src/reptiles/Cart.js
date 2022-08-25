export default function Cart({ cart }) {
  const cartItems = cart.map((item) => {
    return (
      <div className="cartItem" key={item.id}>
        {/* <div className="cart-info"> */}
        <h4>{item.species}</h4>
        <h4 className="animal-price">${item.price}</h4>
        {/* </div> */}
        <div className="cart-button">
          <button>Remove from cart</button>
        </div>
      </div>
    );
  });

  return <ul>{cartItems}</ul>;
}
