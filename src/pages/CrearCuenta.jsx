import React, { useRef } from "react";
import '@styles/CrearCuenta.scss'
import '../../fontawesome/css/all.min.css'
import user from '@assets/logo1.png'

const CrearCuenta = () => {
  const formulario = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formulario.current)

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    console.log(data);
  }

  return (
    <div className="CrearCuenta">
      <div className="form-containerCrearCta">
        <img src={user} alt="logo" className="logo" />
        <div className="titleCrearCuenta row">
          <div className="col-md-7">
            <h1>Crear cuenta</h1>
          </div>
        </div>
        <form className="FormularioCuenta" ref={formulario} onSubmit={handleSubmit}>
          <label htmlFor="name" className="label">Nombre</label>
          <div className="input-wrapper">
            <i className="fas fa-user input-icon" />
            <input type="text" className="input" name="name" placeholder="Juan Perez" />
          </div>
          <label htmlFor="email" className="label">Correo Electronico</label>
          <div className="input-wrapper">
            <i className="fas fa-envelope input-icon" />
            <input type="text" className="input" name="email" placeholder="tucorreo@tucorreo.com" />
          </div>
          <label htmlFor="password" className="label">Crea nueva contraseña</label>
          <div className="input-wrapper">
            <i className="icon fas fa-lock input-icon" />
            <input type="password" className="input" name="password" placeholder="password" />
          </div>
          <label htmlFor="confirm-password" className="label">Repite nueva contraseña</label>
          <div className="input-wrapper">
            <i className="icon fas fa-lock input-icon" />
            <input type="password" className="input" name="confirm-password" placeholder="password" />
          </div>
          </form>
        
          <a href="/">
          <button className="boton-principal">Registrarse</button>
        </a>
        
        <a className="recuperar">ó</a>
        <a href="/log">
          <button className="boton-principal">Iniciar sesión</button>
        </a>
      </div>
    </div>

  );
}

export default CrearCuenta;
