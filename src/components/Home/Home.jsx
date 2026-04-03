import './Home.css'
import CardPizza from "../CardPizza/CardPizza";
import pizzas from '../../Js/pizzas'
import Hero from '../Hero/Hero';
function Home (){
    return(
    <div>
        <Hero/>
        <main className='Container-Pizzas'>
            {pizzas.map((pizza) => (
                <CardPizza
                    key={pizza.id}
                    img={pizza.img}
                    name={pizza.name}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                    desc={pizza.desc}
                    id={pizza.id}
                />
            ))}
        </main>
    </div>
    )
}

export default Home;