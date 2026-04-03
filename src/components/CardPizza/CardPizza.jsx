import './CardPizza.css'
function CardPizza({desc,id,img,ingredients,name,price}){
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
            <p>id</p>
            <p>{id}</p>
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