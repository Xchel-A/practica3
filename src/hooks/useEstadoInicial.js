import { useState } from 'react';

const estadoInicial = {
  carrito: [],
};

const useEstadoInicial = () => {
  const [state, setState] = useState(estadoInicial);

  const agregarCarrito = (payload) => {
    setState({
      ...state,
      carrito: [...state.carrito, payload],
    });
  };

  const eliminarProducto = (id) => {
    const newCarrito = state.carrito.filter((producto) => producto.IdAnimal !== IdAnimal);
    setState({
      ...state,
      carrito: newCarrito,
    });
  };

  return {
    state,
    agregarCarrito,
    eliminarProducto,
  };
};

export default useEstadoInicial;
