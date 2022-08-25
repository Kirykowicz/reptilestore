export default function Cart({ cart, removeFromCart }) {
  function handleDelete(removedItem) {
    fetch(`http://localhost:8004/reptiles/${removedItem.id}`, {
      method: "DELETE",
    });
    removeFromCart(removedItem);
  }

  const cartItems = cart.map((item) => {
    return (
      <div className="cartItem" key={item.id}>
        <h4>{item.species}</h4>
        <h4 className="animal-price">${item.price}</h4>
        <div className="cart-button">
          <button onClick={() => handleDelete(item)}>Remove from cart</button>
        </div>
      </div>
    );
  });

  return <ul>{cartItems}</ul>;
}
