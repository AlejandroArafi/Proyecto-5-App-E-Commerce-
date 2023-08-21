import { Slider } from '../../componentes/carousel/Carousel'
import './HomePage.css'
// import '../../componentes/cards/Cards.css'
export const HomePage = () => {
  
  return (
      <>
           
      <img className="imgMain" src={'https://e0.pxfuel.com/wallpapers/235/847/desktop-wallpaper-wine-glass-stock-food-and-wine.jpg'} alt="" />
      <h2 className='welcome-title'>Bienvenido a nuestra tienda</h2>
      <h2 className='products-title'>Productos</h2>
      {/* <Cards/> */}
      <Slider/>
     
      </>
      )
}
