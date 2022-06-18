import { Cards } from '../../components/Cards';
import { Header } from '../../components/Header';
import logoSith from '../../images/svg/logo-sith.svg';

import styles from './styles.module.scss';

export function About() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.text}>
                    <div>
                        <img src={logoSith} alt="logo sith" />
                        <h1><span>C</span>ODIGO <span>S</span>ITH</h1>
                        <img src={logoSith} alt="logo sith" />
                    </div>
                    <p>
                        A paz é uma mentira, só há paixão.
                        Através da paixão, eu ganho força.
                        Através da força, eu ganho poder.
                        Através do poder, eu ganho vitória.
                        Através da vitória, as minhas correntes são quebradas.
                        A Força irá me libertar.
                    </p>
                </div>
                <div className={styles.separator}>Informações relevantes</div>
                <Cards />
            </div>
        </>
    );
}