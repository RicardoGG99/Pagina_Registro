import React from "react";
import "./styles/Homepage.css";
import Article from "./Article";

//Fotos
import shampoo from './resources/shampoo.png'
import s10 from './resources/s10.jpg'
import hp from './resources/hp.jpg'
import edredon from './resources/edredon.jpg'
import kn95 from './resources/kn95.jpg'
import pew from './resources/pew.jpg'

function Homepage() {
  return (
    <div className="home">
      <div className="contain">
        <div className="tanda">
          
          <Article
            descripcion="Shampoo Dove al Mayor (10 Unidades)"
            precio={18}
            imagen={shampoo}
          />
          <Article
            descripcion="Samsung S10 Nuevo, Liberado, 128Gb de Memoria"
            precio={300}
            imagen={s10}
          />
          <Article
            descripcion="Saga de Libros Principal de Harry Potter Completa"
            precio={45}
            imagen={hp}
          />
          <Article
            descripcion="Edredón King-Size Color Azul-Celeste"
            precio={80}
            imagen={edredon}
          />
          <Article
            descripcion="Tapabocas Quirúrgico al Mayor (50 Unidades)"
            precio={20}
            imagen={kn95}
          />
          <Article
            descripcion="Teclado Gaming GhostKeyboard PewDiePie"
            precio={150}
            imagen={pew}
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;