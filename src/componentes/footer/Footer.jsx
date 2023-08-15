import './Footer.css'

export const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affilate program</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment option</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li><a href="#">groceries</a></li>
                        <li><a href="#">electronics</a></li>
                        <li><a href="#">dress</a></li>
                        <li><a href="#">smartphones</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-link">
                        <a href=""><i className="fab fa-facebook"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
