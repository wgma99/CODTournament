import '../css/Header.css';
import { useState } from 'react';
import cod from '../assets/img/cod.png'

export default function Header() {

    const [ menu, setMenu ] = useState(false);
    const [ scroll, setScroll ] = useState(false);

    const scrollActive = () => {
        (window.scrollY > 120) ?  setScroll(true) : setScroll(false);
    }

    window.addEventListener('scroll', scrollActive);
    
  return (
    <>
    <header className={scroll ? 'active' : ''}>
        <div onClick={() => {setMenu(!menu)}} className='menu-icon'></div>
        <nav className={ menu ? 'menuMobile' : ''}>
            <ul>
                <li><a href="About us"></a></li>
                <li><a href=""></a></li>
            </ul>
        </nav>        
        <picture>
            <img src={cod} alt="Logo de Call Of Duty Mobile" />
        </picture>
    </header>
    <div className='title--contain'>
        <h1 className='title'>Call Of Duty Mobile Toutnaments</h1>
        <hr />
        <h2 className='title--content'>Combate en partidas BR y MJ contra jugadores de distintos paises de América Latina para descubrir quién es el mejor y llevarse el premio.</h2>
    </div>

    </>
  )
}
