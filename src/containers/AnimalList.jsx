import React, { useEffect, useState } from 'react';
import axios from 'axios'
import AnimalItem from '@components/AnimalItem';
import '@styles/ProductList.scss'
import '@styles/ProductItem.scss'
import useGetAnimal from '../hooks/useGetAnimal';

const ProductList = () => {

    const API = 'https://dendenmushi.com.mx/Mascotas/Adopcion/Inicio'



    const animales = useGetAnimal(API)


    return (

        <section className="main-container-product">
            <div className="cards-container-product">

                {animales.map(animal => {
                    return <AnimalItem animal={animal} key={animal.IdAnimal} />
                })}

            </div>
        </section>

    );
}

export default ProductList;