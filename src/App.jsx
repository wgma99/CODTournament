import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import PaymentMethods from './components/PaymentMethods';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

import br from './assets/img/br.jpg';
import mj from './assets/img/mj.jpg';

function App() {

    const [brStatus, setBrStatus ] = useState(false);
    const [mjStatus, setMjStatus ] = useState(false);

  return (
    <div className="App">
      <div className='App--bg'></div>
      <Header/>
      <section id='aboutUs' className='section-aboutUs'>
        <h2 className='title'>Somos un grupo creado para la organización y desarrollo de campeonatos de partidas en Call Of Duty Mobile.</h2>
        <p className='title-p'>Los cuales serán realizados dos veces por semana.</p>
        <h2 className='types'>Tipos de Partidas</h2>
        <div className="types--contain">
          <div onClick={() => {setBrStatus(!brStatus)}} className='types--contain--card'>
            <picture>
              <img src={br} alt="Battle Royale" />
              <h3 className={brStatus ? 'card--click' : ''}>Battle Royale<br /> <span>
              - Partidas todos vs todos - <br />
              1er, 2do y 3er Premio: dependerá de la cantidad de jugadores. <br />
              <span className='span--cost'>Participación: 5$ c/u</span></span> </h3>
            </picture>

          </div>
          <div onClick={() => {setMjStatus(!mjStatus)}} className='types--contain--card'>
            <picture>
              <img src={mj} alt="Multijugador" />
              <h3 className={mjStatus ? 'card--click' : ''}>Multijugador <br /> <span>
              - Duelo de equipos - <br />
              1er Equipo: 400$ <br />
              2do Equipo: 100$ <br />
              <span className='span--cost'>Participación: 5$ c/u ó 20$ por equipo</span> </span> </h3>
            </picture>
          </div>
        </div>
      </section>

      <PaymentMethods />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
