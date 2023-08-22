import Nav from 'react-bootstrap/Nav';
import './Navicon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';


export const Navicon = () => {
  return (
    <Nav defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
      <Nav.Link href="/home"><i className="fa-solid fa-cart-shopping"></i></Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-1"><FontAwesomeIcon icon={faUser} style={{color: "#999999",}} /></Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faGear} style={{color: "#999999",}} /></Nav.Link>
    </Nav.Item>
  </Nav>
  )
}
