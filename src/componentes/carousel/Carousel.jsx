import Carousel from 'react-bootstrap/Carousel';
// import img1 from '../../assets/images/capitulo.png'
// import img2 from '../../assets/images/castilloDeMolina.png'
// import img3 from '../../assets/images/ventisquero.jpg'
import img4 from '../../assets/images/capitulo.png'
import castillo from '../../assets/images/castilloDeMolina.png'

export const Slider = () => {
  return (
      <>
  <div className='d-flex justify-content-center'>
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-40 mx-auto"
          src={img4}
          alt="First slide"
        />
                <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-40 mx-auto"
          src={img4}
          alt="First slide"
        />
        
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-40 mx-auto"
          src={img4}
          alt="First slide"
        />
                <Carousel.Caption>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
    </>
  )
}
