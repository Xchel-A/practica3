import React from "react";
import '@styles/Menu2.scss';


const Menu2 = () =>{
    return(
        <div className="Menu2">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/adopcion">Adopción</a></li>
          <li><a href="/favoritos">Favoritos</a></li>
          <li><a href="/log">Iniciar sesion</a></li>
          <li><a href="/crearcuenta">Crear cuenta</a></li>
         
        </ul>
        </div>
    );
}
export default Menu2;