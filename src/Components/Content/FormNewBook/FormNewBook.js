import React from "react";
import ElementsForm from "./ElementsForm/ElementsForm";

const FormNewBook = () => {

    return (
        <div className="container">
            <div className="formContainer">
            <form>
                <div className="title">
                    <h3>Faça seu Cadastro:</h3>
                </div>

                <ElementsForm type="text" id="nome" name="nome" placeholder="Nome" />
                <ElementsForm type="Text" id="Sobrenome" name="Sobrenome" placeholder="Sobrenome" />
                <ElementsForm type="e-mail" id="E-mail" name="E-mail" placeholder="E-mail" />
                <ElementsForm type="password" id="senha" name="senha" placeholder="Senha" />
                <ElementsForm type="password" id="senha" name="senha" placeholder="Confirme sua senha" />

                <button type="submit">Enviar</button>
            </form>
            </div>
        </div>

    )

}

export default FormNewBook;