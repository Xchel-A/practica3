import React from "react";
import "@styles/MenuC.scss";
import OrdenItem from "@components/OrdenItem";

const MenuCarrito = ({ carrito, eliminarProducto }) => {
  const productos = carrito.reduce((acc, producto) => {
    if (acc[producto.id]) {
      acc[producto.id].cantidad += 1;
    } else {
      acc[producto.id] = {
        ...producto,
        cantidad: 1,
      };
    }
    return acc;
  }, {});

  const total = Object.values(productos).reduce(
    (total, producto) => total + producto.cantidad * producto.price,
    0
  );

  const handleRemoveItem = (id) => {
    eliminarProducto(id);
  };

  return (
    <div className="MenuC">
      <li>
        {Object.values(productos).map((producto) => (
          <OrdenItem
            key={producto.id}
            producto={producto}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
        <li>
          <div class="contTot card">
            <div class="card-img">
              <p>Total:</p>
            </div>
            <div class="card-body"></div>
            <div class="card-price">
              <span class="card-currency">$</span>
              <span class="card-amount">{total}</span>
            </div>
          </div>
        </li>
      </li>
    </div>
  );
};

export default MenuCarrito;
