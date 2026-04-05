import {pizzaCart as estadoInitial} from '../../Js/pizzas'
import { useState } from 'react';
import './CartPizza.css'
function CartPizza(){
  const [pizzas , setPizzas] = useState(estadoInitial)
  function aumentar(id){
  const nuevoCarrito = pizzas.map((pizza) => {
    if (pizza.id === id) {
      return { ...pizza, count: pizza.count + 1 };
    }
    return pizza;
  });
  setPizzas(nuevoCarrito);
  }
  function disminuir(id){
  const nuevoCarrito = pizzas.map((pizza) => {
    if (pizza.id === id && pizza.count >= 1) {
      return { ...pizza, count: pizza.count - 1 };
    }
    return pizza;
  });
  setPizzas(nuevoCarrito);
  }
  console.log(pizzas)
const totalPagar = pizzas.reduce((total, pizza) => total + (pizza.price * pizza.count), 0);    return(
      <>
      {pizzas.map(pizza =>(
        <ul className='cardpizi' key={pizza.id}>
          <li>
            {pizza.name}
            {pizza.price}
          </li>
          <li>
            <button onClick={() => aumentar(pizza.id)}>+</button>
              {pizza.count}
            <button onClick={() => disminuir(pizza.id)}>-</button>
          </li>
        </ul>
      ))}
      <h2>precio total :  {totalPagar} </h2>
      </>
    )
}

export default CartPizza