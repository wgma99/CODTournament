import '../css/ContactUs.css';

import React from 'react'

export default function ContactUs() {
  return (
    <section className='section--contactUs'>
        <h2>Únete a nuestros grupos y redes sociales</h2>
        <div className='social--contain'>
            <a href='https://chat.whatsapp.com/GU3IbRKINssGaUOUi0NAvS' target='_blank' className='icon--contain'>
                <img src="https://img.icons8.com/ios-filled/64/ffeb18/whatsapp.png" alt="WhatsApp Icon" />
                WhatsApp
            </a>

            <a href='https://www.telegram.org/' target='_blank 'className='icon--contain'>
                <img src="https://img.icons8.com/ios-filled/64/ffeb18/telegram.png" alt="Telegram Icon" />
                Telegram
            </a>

            <a href='https://www.facebook.com/' target='_blank' className='icon--contain'>
                <img src="https://img.icons8.com/ios-filled/64/ffeb18/facebook-new.png" alt="Facebook Icon" />
                Facebook
            </a>

            <a href='https://www.twitch.tv/?lang=es' target='_blank' className='icon--contain'>
                <img src="https://img.icons8.com/ios-filled/64/ffeb18/twitch.png" alt="Twitch Icon" />
                Twitch
            </a>
        </div>
        
    </section>
  )
}
