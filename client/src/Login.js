import React, { useState } from "react";
import "./styles/Login.css";
import { Link } from "react-router-dom";
import logo from './resources/ml_logo.png';

function Login() {
  const [inputs, setInputs] = useState({
    user_name: "",
    pass: ""
});

const { user_name, pass } = inputs;

const onChange = (e) =>{
    setInputs({...inputs, [e.target.name] : e.target.value})
}

  const login = async (e) => {
      e.preventDefault();
        try {
            
            const body = { user_name, pass };

            const response = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            // if(response.json()){
            //   window.location = '/'
            // }

            await response.json("Sesion iniciada");
            alert("Sesión iniciada")
            
        } catch (error) {
            console.error()
            alert("No se pudo iniciar sesión")
        }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="logo"
          src={logo}
        />
      </Link>

        <div className="contenedor">
          <h2>Iniciar Sesión</h2>

          <form onSubmit={login}>

            <input type="text" 
                   value={user_name}
                   onChange={(e) => onChange(e)}
                   placeholder=" Nombre de Usuario"
                   name="user_name"
                   id="user_name"
                   maxLength="50"
                   minLength="8"
                   required/>

            <input
              type="password"
              value={pass}
              onChange={(e) => onChange(e)}
              placeholder=" Contraseña"
              id="pass"
              name="pass"
              maxLength="50"
              minLength="8"
              required
            />

            <button
              type="submit"
              className="boton"
            >
              Inicia Sesión
            </button>

            <Link to="/register">
            <button
              className="boton"
              id="registrate"
            >
              Registrate
            </button>
            </Link>

            <Link to="/">
            <button
              className="boton"
              id="inicio"
            >
              Volver al inicio
            </button>
            </Link>

          </form>
        </div>
    </div>
  );
}

export default Login;
