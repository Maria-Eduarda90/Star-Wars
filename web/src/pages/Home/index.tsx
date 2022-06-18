import styles from './styles.module.scss';
import darthVaderImg from '../../images/home.png';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Header } from '../../components/Header';

export function Home(){
    return(
        <>
            <Header />
            <div className={styles.container}>
                <div>
                    <h1><span>S</span>TAR <span>W</span>ARS</h1>
                    <p>
                        é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs. O primeiro filme foi lançado apenas com o título Star Wars, em 25 de maio de 1977, e tornou-se um fenômeno mundial inesperado de cultura popular, sendo responsável pelo início da "era dos blockbusters", que são superproduções cinematográficas que fazem sucesso nas bilheterias e viram franquias com brinquedos, jogos, livros, etc.
                    </p>
                    <div>
                        <button>
                            <a href="https://www.disneyplus.com/" target="_blank">Assistir</a> <i><IoIosArrowRoundForward size={30} color="#ffffff" /></i>
                        </button>
                    </div>
                </div>
                <img src={darthVaderImg} alt="Imagem do darth vader" />
            </div>
        </>
    );
}