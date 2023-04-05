import React from "react";
import "@styles/MenuC.scss";

const ProductoCarrito = ({ producto, handleRemoveItem }) => {
  return (
    <div className="ProductoC">
      <div className="ProductoC-info">
        <div className="card">
          <div className="card-img">
            <img src={producto.Foto} alt={producto.NombreAnimal} />
          </div>
          <div className="card-body">
            <h3 className="card-title">{producto.NombreAnimal}</h3>
            <p>{`Raza: ${producto.Caracteristicas}`}</p>
            <button onClick={() => handleRemoveItem(producto.IdAnimal)}>
              x
            </button>
          </div>
          <div className="card-price">
            <span className="card-currency">Edad: </span>
            <span className="card-amount">{producto.Edad}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoCarrito;
