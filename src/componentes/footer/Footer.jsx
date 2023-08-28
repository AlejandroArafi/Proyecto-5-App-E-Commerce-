import { DiSantiFooter } from '../diSantiFooter/DiSantiFooter'
import './Footer.css'

export const Footer = () => {
  return (
    <>
    <div className="footer">
        <DiSantiFooter/>
                    <div className="container">
                        
            <div className="row">
                <div className="footer-col">
                    <h4>Información</h4>
                    <ul>
                        <li><a href="#">Terminos y condiciones</a></li>
                        <li><a href="#">Politica de privacidad</a></li>
                        <li><a href="#">Politicas de despacho</a></li>
                        <li><a href="#">Servicio al cliente</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Centro de ayuda</h4>
                    <ul>
                        <li><a href="#">Contactenos</a></li>
                        <li><a href="#">Preguntas frecuentes</a></li>
                        <li><a href="#">Recupera tu boleta</a></li>
                        
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Mi cuenta</h4>
                    <ul>
                        <li><a href="#">Mis pedidos</a></li>
                        <li><a href="#">Mis datos personales</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className='title-rrss'>Nuestras redes</h4>
                    <div className="social-link">
                        <a href=""><i className="fab fa-facebook"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        {/* <a href=""><i className="fab fa-linkedin"></i></a> */}
                    </div>
                </div>
            </div>
        </div>
        <p className='reserved'>© 2023 Di Santi. All Rights Reserved.</p>
    </div>
    
    </>
  )
}
