import Carousel from 'react-bootstrap/Carousel';
// import img1 from '../../assets/images/barbera.png'
// import img2 from '../../assets/images/capitulo.png'
// import img3 from '../../assets/images/flaberty.png'
 


export const Slider = () => {
  return (
      <>
  <div className='d-flex justify-content-center'>
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-40 mx-auto"
          src={'https://res.cloudinary.com/deq2bmgqk/image/upload/v1695607180/wineStore/capitulo-baja_yvkmlb.webp'}
          alt="First slide"
        />
                <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
   
      <img
          className="d-block w-40 mx-auto"
          src={'https://res.cloudinary.com/deq2bmgqk/image/upload/v1695607180/wineStore/capitulo-baja_yvkmlb.webp'}
          alt="First slide"
        />
        
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-40 mx-auto"
          src={'https://res.cloudinary.com/deq2bmgqk/image/upload/v1695607180/wineStore/capitulo-baja_yvkmlb.webp'}
          alt="First slide"
        />
                <Carousel.Caption>
               
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
 
    </>
  )
}
