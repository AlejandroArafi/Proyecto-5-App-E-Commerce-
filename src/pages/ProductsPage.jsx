
// import { Carousel } from '../componentes/carousel/Carousel'
import { NavLink } from 'react-router-dom'
import { Cards } from '../componentes/cards/Cards'
import './ProductsPage.css'
import { Dropdown } from 'react-bootstrap'

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
        <li className="nav-item dropdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="nav-link dropdown-toggle"
                      variant="light"
                      id="cepas-dropdown"
                    >
                      Viñas
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Carmen</Dropdown.Item>
                      <Dropdown.Item>Casas del Bosque</Dropdown.Item>
                      <Dropdown.Item>Casas Patronales</Dropdown.Item>
                      <Dropdown.Item>Cono Sur</Dropdown.Item>
                      <Dropdown.Item>Errázuriz</Dropdown.Item>
                      <Dropdown.Item>Flaherty Wines</Dropdown.Item>
                      <Dropdown.Item>Montsecano</Dropdown.Item>
                      <Dropdown.Item>Tarapaca</Dropdown.Item>
                      <Dropdown.Item>Valdivieso</Dropdown.Item>
                      
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                    <li className="nav-item dropdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="nav-link dropdown-toggle"
                      variant="light"
                      id="cepas-dropdown"
                    >
                      Cepas
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Cabernet Sauvignon</Dropdown.Item>
                      <Dropdown.Item>Carmenere</Dropdown.Item>
                      <Dropdown.Item>Merlot</Dropdown.Item>
                      <Dropdown.Item>Chardonnay</Dropdown.Item>
                      <Dropdown.Item>Malbec</Dropdown.Item>
                      <Dropdown.Item>Pinot Noir</Dropdown.Item>
                      <Dropdown.Item>Syrah</Dropdown.Item>
                      <Dropdown.Item>Tempranillo</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item dropdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="nav-link dropdown-toggle"
                      variant="light"
                      id="cepas-dropdown"
                    >
                      Espumantes
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Brut</Dropdown.Item>
                      <Dropdown.Item>Rosé</Dropdown.Item>
                      <Dropdown.Item>Demi-sec</Dropdown.Item>
                      <Dropdown.Item>Champagne</Dropdown.Item>
                      <Dropdown.Item>Extra Brut</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item dropdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="nav-link dropdown-toggle"
                      variant="light"
                      id="cepas-dropdown"
                    >
                      Linea
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Reserva</Dropdown.Item>
                      <Dropdown.Item>Gran Reserva</Dropdown.Item>
                      <Dropdown.Item>Premium</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
