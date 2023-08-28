import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/barbera.png'
import img2 from '../../assets/images/capitulo.png'
import img3 from '../../assets/images/flaberty.png'
 


export const Slider = () => {
  return (
      <>
  <div className='d-flex justify-content-center'>
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-40 mx-auto"
          src={img1}
          alt="First slide"
        />
                <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
   
      <img
          className="d-block w-40 mx-auto"
          src={img2}
          alt="First slide"
        />
        
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-40 mx-auto"
          src={img3}
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
