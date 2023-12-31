import "./index.css"

const CardBooks = (props) => {

        const {src, alt} = props;
    

    return (
        
            <li className="card-book">
                <div class="name-book">
                    <span>{props.nameBook}</span>
                </div>
                <img src={src} alt={alt} className="imagem-book" />

                <ul className="tipo-genero">
                    <li className={props.classGenero}>{props.genero}</li>
                </ul>


                <p className="resumo">{props.resumo}
                </p>
            </li>
        
    );


}

export default CardBooks;


