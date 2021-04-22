import React from 'react';
import './styles/Article.css';

function Article({descripcion, imagen, precio}) {
    return (
        <div className="article">
            <img src={imagen} alt="Imágen de su Artículo" />
            
            <div className="info">
                <p>{descripcion}</p>
                <p className="precio">
                    <br/>
                    <small className="bs">Bss {precio}</small>
                </p>
            </div>
            

        </div>
    ); 
}

export default Article;