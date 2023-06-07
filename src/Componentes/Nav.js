import "./Componentes_Css/Nav.css"
import { Link } from "react-router-dom";
const Nav = () => {

    return (

        <nav>
                <ul>
                <li> <Link to="/" >Home</Link></li> 

                <li> <Link to="/Autor" >Autor</Link></li> 

                <li> <Link to="/Categoria" >Categoria</Link></li>

                <li> <Link to="/Livro" >Livro</Link></li>

                <li>  <Link to="/Editora" >Editora</Link></li>

                <li>  <Link to="/Cadastro" >Cadastro</Link></li>

</ul>
</nav>
    )
}

export default Nav;