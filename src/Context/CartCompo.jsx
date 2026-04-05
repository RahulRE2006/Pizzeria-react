import { useState } from "react";
import { ContextCart } from "./cartContext"; 
import {pizzaCart} from "../Js/pizzas"; 

const CartCompo = ({ children }) => {
  const [cart, setCart] = useState(pizzaCart);

  const removeFromCart = (id) => {
  setCart((prevCart) => prevCart.filter((pizza) => pizza.id !== id));
};
  
  const addToCart = (pizza) => {
  setCart((prevCart) => {
    const existingPizza = prevCart.find((p) => p.id === pizza.id);

    if (existingPizza) {
      return prevCart.map((p) =>
        p.id === pizza.id ? { ...p, count: p.count + 1 } : p
      );
    } else {
      return [...prevCart, { ...pizza, count: 1 }];
    }
  });
};

  const aumentar = (id) => {
    setCart(cart.map((p) => 
      p.id === id ? { ...p, count: p.count + 1 } : p
    ));
  };

  const disminuir = (id) => {
    setCart(cart.map((p) => 
      p.id === id && p.count > 0 ? { ...p, count: p.count - 1 } : p
    ));
  };

  const totalPagar = cart.reduce((total, p) => total + (p.price * p.count), 0);

        return (
            <ContextCart.Provider value={{ cart, aumentar, disminuir, totalPagar , addToCart , removeFromCart}}>
            {children}
            </ContextCart.Provider>
        );
};

export default CartCompo;