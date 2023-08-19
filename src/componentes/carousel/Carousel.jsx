import './carousel.css'

export const Carousel = () => {
  return (
    
    <>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={'https://s7d2.scene7.com/is/image/Tottus/01015080_1?wid=1500&hei=1500&qlt=70'} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://s7d2.scene7.com/is/image/Tottus/01015080_1?wid=1500&hei=1500&qlt=70" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://s7d2.scene7.com/is/image/Tottus/01015080_1?wid=1500&hei=1500&qlt=70" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    </>
  )
}
