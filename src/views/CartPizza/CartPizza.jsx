import { useContext } from "react";
import { ContextCart } from "../../Context/cartContext";
import './CartPizza.css';

function CartPizza() {
  const { cart, aumentar, disminuir, totalPagar , removeFromCart } = useContext(ContextCart);
  return (
    <>
      {cart.map((pizza) => (
        <ul className='cardpizi' key={pizza.id}>
          <li>
            {pizza.name}
            {pizza.price}
          </li>
          <li>
            <button onClick={() => aumentar(pizza.id)}>+</button>
            {pizza.count}
            <button onClick={() => disminuir(pizza.id)}>-</button>
            <button 
              onClick={() => removeFromCart(pizza.id)} 
              className="btn btn-danger btn-sm ms-3"
            >
              Eliminar
            </button>
          </li>
        </ul>
      ))}
      <h2>precio total : {totalPagar}</h2>
    </>
  );
}

export default CartPizza;