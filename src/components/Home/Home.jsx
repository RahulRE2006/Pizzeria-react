import { useState , useEffect } from 'react';

import './Home.css'
import CardPizza from "../CardPizza/CardPizza";
import Hero from '../Hero/Hero';


function Home (){
    const [pizzas , setPizzas] = useState([]);

    useEffect(() => {
        consultarPizzas();
    }, []);

const consultarPizzas = async () => {

    try {
        const url = 'http://localhost:5000/api/pizzas';
        const response = await fetch(url);
        const data = await response.json();
        setPizzas(data);
        }catch (error) {
            console.error('Error al obtener las pizzas:', error);
        }
        }




    return(
    <div>
        <Hero/>
        <section className='container d-flex flex-column align-items-center gap-5 mt-4'>
            <ul className='d-flex list-unstyled gap-3 row' >
                {pizzas.map(pizza => {
                    return(<li className='card-body bg-secondary rounded-3 col-12 col-lg-5 col-xl-4 align-items-strech p-4    ' key={pizza.id}>
                        <CardPizza
                        img={pizza.img}
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients.join(', ')}
                        desc={pizza.desc}
                        />
                    </li>)
        })}
            </ul>
        </section>
    </div>
    )
}

export default Home;