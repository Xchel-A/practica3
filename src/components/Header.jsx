import React,{useState, useContext} from 'react';
import '@styles/Header.scss';
import logo1 from '@assets/logo1.png';
import menu from '@assets/menu.png';
import shop from '@assets/perro.png';
import user from '@assets/user.png';
import Menu from '@components/Menu';
import Menu2 from '@components/Menu2';
import Favoritos from '../containers/AnimalesFavoritos';

import AppContext from '../context/AppContext';



const Header = () => {
  const[toggle , setToggle]=useState(false);
  const[toggleC , setToggleC]=useState(false);
  const[ShowMenu , setShowMenu]=useState(false);
  const { eliminarProducto } = useContext(AppContext);
  const handleToggle =()=>{
    setToggle(!toggle);
    //console.log('aaaaaa');
  }
  const handleCarritoT =()=>{
    setToggleC(!toggleC);
    //console.log('ccccccccc');
  }
  const handleShowMenu =()=>{
    setShowMenu(!ShowMenu);
    //console.log('bbbbbbbb');
  }
  

  const { state } = useContext(AppContext);
  return (
    <nav>
      <title>Navbar</title>
      <img onClick={handleShowMenu} src={menu} alt="menu" className="menu" />
      <div>{ShowMenu && <Menu2 />}</div>
      <div className="navbar-izquierda">
        <a href="/">
          <img src={logo1} alt="logo1" className="logo1" />
          
        </a>
        <ul>
        <li><a href="/">Inicio</a></li>
          <li><a href="/Adopcion">Adopcion</a></li>
          
          <li><a href="/favoritos">Favoritos</a></li>
          
          
        </ul>
      </div>
      <div className="navbar-derecha">
        <ul>
          <li className="navbar-email"><a onClick={handleToggle} > Fundación MiawGuau</a>
          <div>   {toggle && <Menu />}</div>
          </li>
          <li className="navbar-carrito"  onClick={handleCarritoT} >
            <img src={shop} alt="carrito-compras" className="carrito" />
            <div className="carritoMenu">{toggleC && <Favoritos carrito={state.carrito} eliminarProducto={eliminarProducto} />
}</div>

            {state.carrito.length > 0 ? (
              <ul className='contadorCarrito'>{new Set(state.carrito.map(producto => producto.IdAnimal)).size}</ul>
            ) : null}



          </li>
        </ul>
      </div>
     
      

    </nav>

  );
}

export default Header;