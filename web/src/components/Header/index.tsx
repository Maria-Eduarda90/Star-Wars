import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

import imgLogo from '../../images/Logo.png';
import { useState } from 'react';

export function Header(){
    const [colorChange, setColorChange] = useState(false);

    function changeNavbarColor() {
        if(window.scrollY >= 60){
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    }
    window.addEventListener('scroll', changeNavbarColor);

    return(
        <header className={`${styles.container} ${colorChange ? `${styles.navbar}` : ''}`}>
            <div>
                <img src={imgLogo} alt="Logo star-wars" />
            </div>
            <div className={styles.links}>
                <NavLink to="/" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#a9a4a4',
                })}>
                    <p>Home</p>
                </NavLink>
                <NavLink to="/Sobre" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#a9a4a4',
                })}>
                    Sobre
                </NavLink>
                <NavLink to="/Personagens" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#a9a4a4',
                })}>
                    Personagens
                </NavLink>
                <NavLink to="/Comentarios" style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#a9a4a4',
                })}>
                    Seção de Comentario
                </NavLink>
            </div>
        </header>
    );
}