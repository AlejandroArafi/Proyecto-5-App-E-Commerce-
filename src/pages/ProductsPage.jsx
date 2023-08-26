
// import { Carousel } from '../componentes/carousel/Carousel'
import { NavLink } from 'react-router-dom'
import { Cards } from '../componentes/cards/Cards'
import './ProductsPage.css'

export const ProductsPage = () => {
  return (
    <>
      <h2 className='products'>Productos</h2>

      <div className="navbar">
  
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/productos">Viñas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/login">Cepas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/contacto">Espumantes</NavLink>
          </li>
        </ul>
      </div>
        </div>
    </nav>

  </div>


      {/* <div className="category-box">
        <p className='category'>Categorias</p>
        <ul className="group-li">
          <li>Vinos</li>
          <li>Vinos emsamblajes</li>
          <li>Vinos gran reserva</li>
        </ul>


       </div> */}
      <Cards/>
    
      </>
  )
}
