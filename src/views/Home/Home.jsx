import { useState , useEffect } from 'react';
import './Home.css'
import CardPizza from "../../components/CardPizza/CardPizza";
import Hero from '../../components/Hero/Hero';

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
        <section className='container mt-3'>
            <ul className='row list-unstyled g-3 justify-content-center' >
                {pizzas.map((pizza) => (
  <li key={pizza.id} className='col-12 col-md-5 col-lg-4'>
    <CardPizza 
      pizza={pizza}
    />
  </li>
))}
            </ul>
        </section>
    </div>
    )
}

export default Home;