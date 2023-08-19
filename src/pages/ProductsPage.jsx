import { Carousel } from '../componentes/carousel/Carousel'
import './ProductsPage.css'

export const ProductsPage = () => {
  return (
    <>
      <h2 className='products'>Productos</h2>

      <div className="category-box">
        <p className='category'>Categorias</p>

        <ul className="group-li">
          <li>Vinos</li>
          <li>Vinos emsamblajes</li>
          <li>Vinos gran reserva</li>
        </ul>
        <Carousel/>
      </div>
    
      </>
  )
}
