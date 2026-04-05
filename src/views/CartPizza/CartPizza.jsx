import { useContext } from "react";
import { ContextCart } from "../../Context/cartContext";
import { UserContext } from "../../Context/UserContext"; 
import './CartPizza.css';

function CartPizza() {
  const { cart, aumentar, disminuir, totalPagar, removeFromCart } = useContext(ContextCart);
  
  const { token } = useContext(UserContext); 

const handleCheckout = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, 
      },
      body: JSON.stringify({
        cart: cart,
      }),
    });

    if (response.ok) {
      alert("¡Compra exitosa! 🍕");
    } else {
      alert("Hubo un error al procesar el pago.");
    }
  } catch (error) {
    console.error("Error en el checkout:", error);
    alert("No se pudo conectar con el servidor.");
  }
};
  return (
    <div className="container mt-5">
      <h2>Detalles del pedido:</h2>
      
      <div className="p-3 bg-light rounded">
        {cart.map((pizza) => (
          <div key={pizza.id} className="d-flex justify-content-between align-items-center border-bottom py-3">
            <div className="d-flex align-items-center">
              <img src={pizza.img} alt={pizza.name} width="80" className="rounded me-3" />
              <div>
                <h5 className="text-capitalize mb-0">{pizza.name}</h5>
                <small className="text-muted">Precio unitario: ${pizza.price.toLocaleString()}</small>
              </div>
            </div>
            
            <div className="d-flex align-items-center">
              <span className="me-3 fw-bold">${(pizza.price * pizza.count).toLocaleString()}</span>
              
              <button className="btn btn-outline-danger btn-sm" onClick={() => disminuir(pizza.id)}>-</button>
              <span className="mx-3">{pizza.count}</span>
              <button className="btn btn-outline-primary btn-sm" onClick={() => aumentar(pizza.id)}>+</button>
              
              <button 
                className="btn btn-danger btn-sm ms-4" 
                onClick={() => removeFromCart(pizza.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}

        <div className="text-end mt-4">
          <h2 className="mb-3">Total: ${totalPagar.toLocaleString()}</h2>

          <button 
  className="btn btn-dark btn-lg" 
  disabled={!token}
  onClick={handleCheckout}
>
  Pagar
</button>

          {!token && (
            <p className="text-danger mt-2 small">
              ⚠️ Inicia sesión para realizar el pago
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPizza;