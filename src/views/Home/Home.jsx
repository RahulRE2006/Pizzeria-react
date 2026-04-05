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
        <section className='container d-flex flex-column align-items-center gap-5 mt-4'>
            <ul className='d-flex list-unstyled gap-3 row' >
                {pizzas.map((pizza) => (
  <li key={pizza.id} className="...">
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