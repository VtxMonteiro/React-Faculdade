import ElementsForm from "./ElementsForm/ElementsForm";

const FormNewEdit = () => {

    return (
        <div className="container">

            <div className="formContainer">
                
            <form>
                <div className="title">
                    <h3>Cadastre seu livro:</h3>
                </div>

                <ElementsForm type="Number" id="id" name="id" placeholder="Informe o ID do livro" />
                <ElementsForm type="Text" id="NameBook" name="NameBook" placeholder="Informe o nome do livro" />
                <ElementsForm type="Text" id="Genero" name="genero" placeholder="Informe o gênero do livro" />
                <ElementsForm type="Text" id="Autor" name="autor" placeholder="Informe o nome do autor" />
                <ElementsForm type="Number" id="valor" name="valor" placeholder="Informe o valor do livro" />

                <button type="submit">Enviar</button>
            </form>
            </div>
        </div>

    )

}

export default FormNewEdit;