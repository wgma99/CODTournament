import '../css/Footer.css';
import codmobile from '../assets/img/codmobile.png'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="infoDeveloper">
                <p>Designed by:</p>
                <a href="#"><span class="wgma99--logo"></span> wgma99</a>
                <a href="https://linkedin.com/in/wgma99" target="_blank"><span className="linkedin--logo"></span> LinkedIn</a>
            </div>
            <picture className='footer--logo'>
                <img src={codmobile} alt="" />
            </picture>
        </div>
    )
  }
  