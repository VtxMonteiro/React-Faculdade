import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';import Home from "./Pages/Home";
import Autor from "./Pages/Autor";
import Livro from "./Pages/Livro";
import Editora from "./Pages/Editora";
import Categoria from "./Pages/Categoria";
import Cadastro from "./Pages/cadastro";

import './index.css';
import Autores from './Pages/Autores';
import EditarAutor from './Pages/EditarAutor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <BrowserRouter>

    <App/>

    <Routes >
<Route>
        <Route path= "/" element= {<Home />} />
        <Route path= "/Autor" element= {< Autor/>} />
        <Route path= "/Categoria" element= {<Categoria/>} />
        <Route path= "/Livro" element= {< Livro/>} />
        <Route path= "/Editora" element= {< Editora/>} />
        <Route path= "/Cadastro" element= {< Cadastro/>} />
        <Route path= "/autores" element= {< Autores/>} />
        <Route path= "/autores/editar" element= {< EditarAutor />} />

      </Route>

    </Routes>

    </BrowserRouter>

  </React.StrictMode>
);