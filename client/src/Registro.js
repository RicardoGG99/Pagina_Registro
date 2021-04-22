import React, { useState } from "react";
import "./styles/Registro.css";
import { Link } from "react-router-dom";
import logo from './resources/ml_logo.png';

function Registro() {
  const [inputs, setInputs] = useState({
    correo: "", 
    user_name: "",
    pass: ""
});

const { correo, user_name, pass } = inputs;

const onChange = (e) =>{
    setInputs({...inputs, [e.target.name] : e.target.value})
}

  const register = async (e) => {
    e.preventDefault();
        try {
            
            const body = { correo, user_name, pass }

            const response = await fetch('/register', {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })


            // if(response.json()){
            //   window.location = '/login'
            // }

            await response.json("Usuario Registrado")
            alert("Usuario Registrado")


        } catch (error) {
            alert("No se pudo registrar el usuario")
            console.error()
        }
  };

  return (
    <div className="registro">
      <Link to="/">
        <img
          className="logo"
          src={logo}
        />
      </Link>

        <div className="contenedor">
          <h2>Registre un Nuevo Usuario</h2>

          <form onSubmit={register}>

            <input type="email"
                  value={correo}
                  onChange={e => onChange(e)}
                   placeholder=" Correo Electrónico"
                   name="correo"
                   id="correo"
                   maxLength="50"
                   required/>

            <input type="text" 
                   value={user_name}
                   onChange={e => onChange(e)}
                   placeholder=" Nombre de Usuario"
                   name="user_name"
                   id="user_name"
                   maxLength="50"
                   minLength="8"
                   required/>

            <input
              type="password"
              value={pass}
              onChange={e => onChange(e)}
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
              Registrar Usuario
            </button>

            <Link to="/login">
            <button
              className="boton"
              id="sesion"
            >
              Inicia sesión si ya tienes usuario
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

export default Registro;
