import React from 'react';
import '@styles/Footer.scss'
import whats from '@assets/whatsapp.png'
import face from '@assets/facebook.png'
import insta from '@assets/instagram.png'



const Footer = () => {
    return(
        <footer>
        <div class="footer-container">
            <div class="left-section">
            <h3>Información de contacto</h3>
            
            <p>+1 (555) 123-4567</p>
            <p>1234 Calle de la Fundación, Ciudad, Estado, Código Postal</p>
            </div>
            <div class="right-section">
            <h3>Síguenos en las redes sociales</h3>
            <ul>
                
                <li><img height="30px" src={face} alt="" /></li>
                <li><img height="30px" src={insta} alt="" /></li>
                <li><img height="30px" src={whats} alt="" /></li>
                
            </ul>
            </div>
        </div>
        </footer>

    );

}
export default Footer;