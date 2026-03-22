import './CardPizza.css'
function CardPizza({url,nombre,ingredientes,precio}){
    return(
        <div className="CardPizza">
            <img src={url} alt="" />
            <h4>
                {nombre}
            </h4>
            <p>Ingredientes :</p>
            <p>{ingredientes}</p>
            <h3>Precio : ${Number(precio).toLocaleString()}</h3>
            <div className='CardPizza__Buttons'>
                <button>
                    ver mas
                </button>
                <button>
                    añadir
                </button>
            </div>
        </div>
    )
}

export default CardPizza