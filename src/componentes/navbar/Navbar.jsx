import { NavLink } from "react-router-dom"
import './Navbar.css'


export const Navbar = () => {
  return (
    <>

    <div className="navbar">
  

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/productos">Productos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </div>
  
      </div>
  
  </nav>

  {/* <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="¿Que producto buscas?" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>


</nav> */}
  </div>
  </>

  )
}
