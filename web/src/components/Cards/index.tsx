import imgPadawan from '../../images/about/padawan.png';
import imgJedi from '../../images/about/jedi.png';
import imgSith from '../../images/about/sith.png';

import styles from './styles.module.scss';

export function Cards() {
    return (
        <div className={styles.information}>
            <div className={styles.padawan}>
                <img src={imgPadawan} alt="padawan" />
                <h1>PADAWAN</h1>
                <p>
                    Padawan signica aprendiz, iniciante, e é um termo utilizado nos filmes Star Wars. Padawan são crianças que faziam treinamentos para se tornarem um cavaleiro Jedi, os cavaleiros do lado bom da força.
                </p>
            </div>
            <div className={styles.jedi}>
                <img src={imgJedi} alt="jedi" />
                <h1>JEDI</h1>
                <p>
                    Um Jedi era um indivíduo sensível à Força, geralmente membro da Ordem Jedi, que estudava, servia-a, e usava as energias místicas da Força e do lado luminoso.
                </p>
            </div>
            <div className={styles.sith}>
                <img src={imgSith} alt="sith" />
                <h1>SITH</h1>
                <p>
                    Os Sith, coletivamente chamados de Ordem Sith, eram uma ordem de usuários da Força que se utilizavam do lado sombrio da Força para ganhar poder pela galáxia.
                </p>
            </div>
        </div>
    );
}