import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FormAutor = () => {

    const [nomeAutor, setNomeAutor] = useState('');

    const salvarAutor = (event) => {

        axios.post('http://localhost:8080/api/bookstore/admin/autor/create', {
            nome: nomeAutor,
          })

          .then(function (response) {
            alert("Autor salvo")
            setNomeAutor('')
            console.log(response);

          })

          .catch(function (error) {
            console.log(error);
            
          });

        return event.preventDefault();
        
    }

    return (
        <div className="container">
            <div className="formContainer">
                <form onSubmit={salvarAutor}>
                    <div className="title">
                        <h3>Cadastre seu Autor:</h3>
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

                    <button type="submit">Enviar</button>
                </form>

                <div className="linkAutores">
                    <Link to="/autores">Ver autores</Link>
                </div>
            </div>

            
        </div>

    )
}

export default FormAutor;