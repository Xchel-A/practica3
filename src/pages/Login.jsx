import React ,{useRef} from "react";
import '@styles/Login.scss';
import '../../fontawesome/css/all.min.css'
import user from '@assets/logo1.png'


const Login = () => {
  //2- crear constante asignando el valor useRef

  const formulario = useRef(null)

  const handleSubmit = () => {

    const formData = new FormData(formulario.current)

    const data = {
      username: formData.get('email'),
      pass: formData.get('pass')
    }

    console.log(data)

  }

  return (
    <div className="Login">
      <div className="form-container-login">
        <img src={user} alt="logo" className="logologin" />
        <div className="titlelogin row">
          <div className="col-md-7"> 
            <h2>Iniciar Sesión</h2>
          </div>
        </div>
        <form action="" className="formulario-login" ref={formulario}>
          <label htmlFor="email" className="label" >Usuario</label>

          <div className="input-wrapper">
            <i className="fas fa-user input-icon" />
            <input type="text" className="input" name="email" placeholder="tucorreo@tucorreo.com" />
          </div>
          <label htmlFor="email" className="label" >Contraseña</label>
          <div className="input-wrapper">
            <i className="icon fas fa-lock input-icon" />
            <input type="password" className="input" name="pass" placeholder="password" />
          </div>
          <a href="/">
            <input type="button" className="boton-principal1 " defaultValue="Iniciar sesión" onClick={handleSubmit} />
            </a>
        </form>
       
        <a href="crearcuenta">
          <button className="boton-principal1 ">Registrarme</button>
        </a>
        <a href="/*" className="recuperar1">Recuperar contraseña</a>
      </div>
    </div>
  );
  
}

export default Login;