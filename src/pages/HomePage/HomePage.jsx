
import { Cards } from '../../componentes/cards/Cards'
import { PayButton } from '../../componentes/payButton/PayButton'
import './HomePage.css'
// import '../../componentes/cards/Cards.css'
export const HomePage = () => {
  
  return (
      <>
      
      <PayButton/>
      
      <img className="imgMain" src={'https://e0.pxfuel.com/wallpapers/235/847/desktop-wallpaper-wine-glass-stock-food-and-wine.jpg'} alt="" />
      <h2 className='welcome-title'>Bienvenido a nuestra tienda</h2>
      <h2 className='products-title'>Productos</h2>
      <Cards/>
     
      </>
      )
}
