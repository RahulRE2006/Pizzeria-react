import './CardPizzaCard.css'
import { CartPizza as estadoInitial} from '../CartPizza'
import { useState } from 'react'
function CardPizzaCard({id,name,img,count,price}){
    const [pizzas , setPizzas] = useState(estadoInitial)
    function añadir(){
        
    }

    
    return(
        <div className="CardCart" id={id}>
            <div className='contexCart'>
                <img src={img} alt="" />
                <p>{name}</p>
            </div>
            <div className='countCart'>
                <p>{Number(price).toLocaleString()} clp</p>
                <div className='buttonCart'>
                    <button onClick={añadir}>+</button>
                    <p>{count}</p>
                    <button>-</button>
                </div>
            </div>
        </div>
    )
}

export default CardPizzaCard