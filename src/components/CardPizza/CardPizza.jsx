import './CardPizza.css'
function CardPizza({desc,img,ingredients,name,price}){
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
                <button className='btn border-white text-white'>
                    ver mas
                </button>
                <button className='btn border-white text-white'>
                    añadir
                </button>
            </div>
        </div>
    )
}

export default CardPizza