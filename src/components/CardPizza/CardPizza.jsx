import './CardPizza.css'
// src/components/CardPizza/CardPizza.jsx
import { useContext } from "react";
import { ContextCart } from "../../Context/cartContext"; // Asegura que la ruta sea correcta
function CardPizza({ pizza }) { 
    const { addToCart } = useContext(ContextCart); // <--- Traemos la función del contexto
  const { desc, img, ingredients, name, price } = pizza;
    return(
        <div className="CardPizza">
            <img src={img} alt="" />
            <h4>
                {name}
            </h4>
            <p>Ingredientes :</p>
            <p>{ingredients}</p>
            <h3>Precio : ${Number(price).toLocaleString()}</h3>
            <p>{desc}</p>
            <div className='d-flex gap-3 justify-content-between p-2'>
                <button className='btn border-white text-black'>
                    ver mas
                </button>
                <button onClick={() => addToCart(pizza)} className='btn border-white text-black'>
                    añadir
                </button>
            </div>
        </div>
    )
}

export default CardPizza