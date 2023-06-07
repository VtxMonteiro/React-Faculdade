import CardBooks from "./CardBooks";
import PercyJackson from "../Imagens/Percy Jackson.jpg";
import HarryPotter from "../Imagens/Harry-Potter.jpg";
import Assassins from "../Imagens/Assassins.jpg";
import Narnia from "../Imagens/Narnia.jpg";


const Content = () => {

    return(
        <div>
            <ul className="list-books">

                <CardBooks nameBook="Percy Jackson" src={PercyJackson} alt="Percy Jackson" classGenero="Infantil" genero="Categoria 12" resumo="'Percy Jackson' um adolescente que descobre que ele é filho de Poseidon, e seu amigo Grover, que é meio-selvagem. Juntos eles se embarcam em suas aventuras durante toda a trilogia, e descobrem mais sobre si mesmos enquanto enfrentam os vilões."/>

                <CardBooks nameBook="Harry Potter" src={HarryPotter} alt="Harry Potter" classGenero="Infantil" genero="Categoria 14" resumo="'Harry Potter' é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.."/>

                <CardBooks nameBook="Assassins Creed" src={Assassins} alt="Assassins Creed" classGenero="Infantil" genero="Categoria 16" resumo="'Assassins Creed' É a premissa central da história envolve-se a partir da rivalidade entre duas sociedades secretas ancestrais: os Assassinos, que desejam a paz através do livre arbítrio, e os Templários, que têm o objetivo de dominar o mundo e impor a ordem na humanidade."/>

                <CardBooks nameBook="As Crônicas de Narnia" src={Narnia} alt="Narnia" classGenero="Infantil" genero="Livre" resumo="'Narnia' é uma história encantadora, onde o inverno é eterno nunca há Natal. Centauros, faunos, gigantes e outros animais falantes vivem infelizes com a maldição, declarada na ausência do Leão Aslam, que agora retorna ao reino ao lado das crianças. Juntos, todos irão lutar para acabar com a profecia de Jadis e liberar o local do domínio do mal."/>
                
            </ul>
        </div>
    );

}

export default Content;