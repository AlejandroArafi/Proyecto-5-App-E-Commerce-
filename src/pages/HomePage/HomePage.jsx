import { Slider } from '../../componentes/carousel/Carousel'
import './HomePage.css'

// import '../../componentes/cards/Cards.css'
export const HomePage = () => {
  
  return (
      <>
           <div className='main-home'>
            <div className="image-container">
      <img className="imgMain" src={'https://e0.pxfuel.com/wallpapers/235/847/desktop-wallpaper-wine-glass-stock-food-and-wine.jpg'} alt="" />
      <div className="text-overlay">
      <h3>TEXTO SUPERPUESTO</h3>
      <h5>Sumérgete en la experiencia de nuestros selectos licores y mantén tu alegría en alto. Descubre el refinado sabor de nuestras bebidas exclusivas, ideales para los amantes del buen alcohol.</h5>
      <button>ir</button>
      </div>
      </div>

      <div className="welcome-container">

      <h2 className='welcome-title'>Bienvenido a nuestra tienda</h2>
      <p className='centered-paragrap'>Descubre una experiencia vinícola excepcional en nuestra tienda en línea. Nos dedicamos a ofrecer una cuidadosa selección de vinos, fusionando la sobriedad y la elegancia en cada botella. Eleva tus momentos con nuestras refinadas opciones, perfectas para amantes del buen gusto y la calidad.</p>
    
      </div>
      <h2 className='products-title'>Productos destacados</h2>
      {/* <Cards/> */}
      <Slider/>
      </div>
     
      </>
      )
}
