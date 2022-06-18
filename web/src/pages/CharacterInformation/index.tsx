import styles from './styles.module.scss';

import { Carousel } from "../../components/Carousel";
import { Header } from '../../components/Header';

export function CharacterInformation() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Carousel />
            </div>
        </>
    );
}