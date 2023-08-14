import { NavLink } from "react-router-dom"
import './Navbar.css'


export const Navbar = () => {
  return (
    <>

    <div className="navbar">
  

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink className="nav-item nav-link" to="/">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-item nav-link" to="#">Acerca de</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-item nav-link" to="#">Contacto</NavLink>
          </li>
        </ul>
      </div>
  
      </div>
  
  </nav>

  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>


</nav>
  </div>
  </>

  )
}
