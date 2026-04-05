import './CardPizza.css'
import { useContext } from "react";
import { ContextCart } from "../../Context/cartContext"; 
import { Link } from "react-router-dom";
function CardPizza({ pizza }) { 
    const { addToCart } = useContext(ContextCart); // <--- Traemos la función del contexto
  const { desc, img, ingredients, name, price } = pizza;
    return(
        <div className="CardPizza card h-100 bg-secondary p-3 rounded">
            <img src={img} alt="" />
            <h4>
                {name}
            </h4>
            <p>Ingredientes :</p>
            <p>{ingredients}</p>
            <h3>Precio : ${Number(price).toLocaleString()}</h3>
            <p>{desc}</p>
            <div className='d-flex gap-3 justify-content-between p-2'>
                <Link to={`/pizza/${pizza.id}`}>
  <button className='btn border-black text-black'>ver mas</button>
</Link>
                <button onClick={() => addToCart(pizza)} className='btn border-black text-black'>
                    añadir
                </button>
            </div>
        </div>
    )
}

export default CardPizza