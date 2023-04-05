import React from "react";
import Orden from '@components/Orden'
import FavoritoItem from "@components/FavoritoItem";
import Corazon from '@assets/like.png'
import useGetAnimal from '../hooks/useGetAnimal';

const FinalizarCompra = () => {
    const API = 'https://dendenmushi.com.mx/Mascotas/Adopcion/Inicio'

    const animales = useGetAnimal(API)
    return (
        <div className="FinalizarCompra" >
            <div className="FinalizarCompra-container">
                <h1 className="title-or">Mis Favoritos <img src={Corazon} height="20px" alt="" /></h1>
                <div className="FinalizarCompra-content">
                    {animales.map(animal => {
                        return <FavoritoItem animal={animal} key={animal.IdAnimal} />
                    })}
                    
                    
                </div>
            </div>
        </div>

    );
}

export default FinalizarCompra;