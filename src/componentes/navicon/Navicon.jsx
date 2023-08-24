import Nav from 'react-bootstrap/Nav';
import './Navicon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faGear, faUser } from '@fortawesome/free-solid-svg-icons';


export const Navicon = () => {
  return (
//     <Nav defaultActiveKey="/home" as="ul">
//     <Nav.Item as="li">
//       <Nav.Link href="/home"><FontAwesomeIcon icon={faCartShopping} style={{color: "#999999",}} /></Nav.Link>
//     </Nav.Item>
//     <Nav.Item as="li">
//       <Nav.Link eventKey="link-1"><FontAwesomeIcon icon={faUser} style={{color: "#999999",}} /></Nav.Link>
//     </Nav.Item>
//     <Nav.Item as="li">
//       <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faGear} style={{color: "#999999",}} /></Nav.Link>
//     </Nav.Item>
//   </Nav>

<Nav defaultActiveKey="/home" as="ul">
<Nav.Item as="li">
  <Nav.Link href="/#"><FontAwesomeIcon icon={faCartShopping} style={{color: "#999999",}} /></Nav.Link>
</Nav.Item>
<Nav.Item as="li">
  <Nav.Link href="/login" ><FontAwesomeIcon icon={faUser} style={{color: "#999999",}} /></Nav.Link>
</Nav.Item>
<Nav.Item as="li">
  <Nav.Link href="/#"><FontAwesomeIcon icon={faGear} style={{color: "#999999",}} /></Nav.Link>
</Nav.Item>
</Nav>
  )
}
