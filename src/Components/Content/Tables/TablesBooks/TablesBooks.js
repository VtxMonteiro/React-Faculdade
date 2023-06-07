import CabecalhoBooks from "./ElementsTableBooks/CabecalhoBooks";
import LinesTable from "./ElementsTableBooks/LinesTable";

const TableBooks = () => {

    return (
        <div className="table-container">

            <h2>Categorias</h2>

            <div className="table-responsive">

                

                <table>
                    <CabecalhoBooks colum1="ID" colum2="Nome" colum3="Categoria" colum4="Autor(a)" colum5="Preço (R$)"  />
                    <LinesTable dado1="1" dado2="Percy Jackson" dado3="12 anos" dado4="indefined" dado5="25,00"  />

                    <LinesTable dado1="2" dado2="Harry Potter " dado3="14 Anos" dado4="indefined" dado5="35,00"  />

                    <LinesTable dado1="3" dado2="Assassins Creed" dado3="18 anos" dado4="indefined" dado5="60,00"  />

                    <LinesTable dado1="4" dado2="As Crônicas de Narnia" dado3="Livre" dado4="indefined" dado5="75,00"  />
                </table>

            </div>

        </div>
    )

}

export default TableBooks;