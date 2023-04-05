import React from "react";
import "@styles/MenuC.scss";
import AnimalesFavoritos from "@components/AnimalesFavoritosItem";

const MenuCarrito = ({ carrito, eliminarProducto }) => {
  const productos = carrito.reduce((acc, producto) => {
    if (acc[producto.IdAnimal]) {
      acc[producto.IdAnimal].cantidad += 1;
    } else {
      acc[producto.IdAnimal] = {
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

  const handleRemoveItem = (Id) => {
    eliminarProducto(id);
  };

  return (
    <div className="MenuC">
      <li>
        {Object.values(productos).map((producto) => (
          <AnimalesFavoritos
            key={producto.IdAnimal}
            producto={producto}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
       
      </li>
    </div>
  );
};

export default MenuCarrito;
