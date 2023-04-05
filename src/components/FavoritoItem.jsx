import React from "react";
import '@styles/OrdenItem.scss'
import producto1 from "@assets/producto1.jpg"

const FavoritoItem = ({animal}) => {
    return (

        <div className="producto">
            <img src={animal.Foto} alt="" />
            <h4>{animal.NombreAnimal}</h4>
            <a>Edad: {animal.Edad}</a>
        </div>

    );
}

export default FavoritoItem;