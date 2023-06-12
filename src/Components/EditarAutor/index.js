import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EditarAutor = () => {
    let navigate = useNavigate();

    const [nomeAutor, setNomeAutor] = useState('');
    const [idAutor, setIdAutor] = useState('');
    const [ativo, setAtivo] = useState('');

    const atualizarAutor = (event) => {
        axios.put(`http://localhost:8080/api/bookstore/admin/autor/update/${idAutor}`, {
            nome: nomeAutor,
          })

          .then(function (response) {
            console.log(response);
            return navigate("/autores");
          })

          .catch(function (error) {
            console.log(error);
            
          });

        return event.preventDefault();
        
    }

    useEffect(() => {
        pegaParametrosUrl()
    }, [])

    const pegaParametrosUrl = () => {
        let url = window.location.href;
        let parametrosUrl = url.split('?');
        let parametros = parametrosUrl[1].split('&');

        const nome = parametros[0].split('=')[1];
        const id = parametros[1].split('=')[1];
        const ativo = parametros[2].split('=')[1];

        setNomeAutor(nome)
        setIdAutor(id)
        setAtivo(ativo)
    }

    return (
        <div className="container">
            <div className="formContainer">
                <form onSubmit={atualizarAutor}>
                    <div className="title">
                        <h3>Editar autor</h3>
                    </div>

                    <input 
                        type="text" 
                        id="nomeAutor" 
                        name="nomeAutor"
                        required 
                        placeholder="Nome"  
                        value={nomeAutor ? nomeAutor : ''}
                        onChange={event => setNomeAutor(event.target.value)}
                    />

                    <button type="submit">Atualizar</button>
                </form>

                <div className="linkAutores">
                    <Link to="/autores">Ver autores</Link>
                </div>
            </div>

            
        </div>

    )
}

export default EditarAutor;