import styles from './styles.module.scss';
import { NavLink } from "react-router-dom";

export function NoutFound (){
    return(
        <div className={styles.container}>
            <h1>:(</h1>
            <p>Sorry! pagina não encotrada</p>
            <NavLink to="/">Ir para a home</NavLink>
        </div>
    );
}