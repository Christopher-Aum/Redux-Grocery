import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { deleteCart } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  const dispatch = useDispatch()

  const removeCartItem = (e) => {
    dispatch(deleteCart(item.id))
  }

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
        >
          +
        </button>
        <button
          className="cart-item-button"
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={removeCartItem}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
