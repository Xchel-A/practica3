import React from "react";
import '@styles/Menu.scss'
import user from '@assets/userMenu.svg'
import orden from '@assets/Orden.svg'
import out from '@assets/signout.svg'

const Menu = () => {
    return (
        <div className="Menu">
            <ul>
                <li>
                   
                    <a href="/crearcuenta">Crear cuenta</a>
                </li>
                <li>
               
                    <a href="/favoritos">Favoritos</a>
                </li>
                <li>
                
                    <a href="/log">Cerrar sesión</a>
                </li>
            </ul>
        </div>
    ); 
}

export default Menu;