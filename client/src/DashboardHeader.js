import React from "react";
import "./styles/DashboardHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import logo from './resources/ml_logo.png';

function DashboardHeader() {
  return (
    <div className="cabecera">
      <img
        className="logo"
        src={logo}
      />


      <div className="busqueda">
        <input className="barra" 
               type="text" 
               placeholder=" Busque artículos por título"/>
        <SearchIcon
          className="iconoBusqueda"
          type="submit"
          value="Search"
        />
      </div>

      <div className="aparta">
        <Link to="/login">
          <div className="separador">
            
            <p className="texto">Iniciar Sesión</p>
          </div>
        </Link>

        <div className="separador">
          <Link to="/register">
    
            <p className="texto">Registrate</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
