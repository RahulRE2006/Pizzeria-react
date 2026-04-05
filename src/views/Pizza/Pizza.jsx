import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  const getPizza = async () => {
    const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
    const data = await res.json();
    setPizza(data);
  };

  useEffect(() => {
    getPizza();
  }, [id]);

  if (!pizza) return <div>Cargando detalles de la pizza...</div>;

  return (
    <div className="pizza-container">
        <img src={pizza.img} alt={pizza.name} />
        <h1>{pizza.name}</h1>
        <p>{pizza.desc}</p>
        <ul>
            {pizza.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>
        <h3>Precio: ${pizza.price}</h3>
    </div>
  );
};

export default Pizza;