import React from 'react';
import '@styles/global.css'
import Layout from '@containers/Layout';

import CrearCuenta from '@pages/CrearCuenta';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import NoEncontrado from '@pages/NoEncontrado';
import Login from '@pages/Login';
import MiOrden from '@pages/MiOrden';

import Inicio from '@pages/Inicio';
import AppContext from '../context/AppContext';
import useEstadoInicial from '../hooks/useEstadoInicial';



const App = () => {
    const estadoInicial = useEstadoInicial();
    return (
        <AppContext.Provider value={estadoInicial}>

        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/adopcion' element={<Home />} />
                    <Route path='/favoritos' element={<MiOrden />} />
                    <Route path='/log' element={<Login />} />
                    <Route path='/crearcuenta' element={<CrearCuenta />} />
                    <Route path='*' element={<NoEncontrado />} />
                    
                </Routes>
              
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;