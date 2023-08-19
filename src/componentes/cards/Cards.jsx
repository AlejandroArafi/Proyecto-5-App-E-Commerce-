import './Cards.css'
import CAPITULO from '../../assets/images/CAPITULO.png'


export const Cards = () => {
  return (
    <>
    <div className="cards">

    <div className="wrapper">
    <div className="product-img">
     <img className='capitulo' src={CAPITULO} alt="" />
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>Harvest Vase</h1>
        <h2>by studio and friends</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="product-price-btn">
        <p><span>78</span>$</p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="product-img">
     <img className='capitulo' src={CAPITULO} alt="" />
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>Harvest Vase</h1>
        <h2>Lorem, ipsum dolor.</h2>
        <p>Harvest Vases are a reinterpretation</p>
      </div>
      <div className="product-price-btn">
        <p><span>78</span>$</p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>

  <div className="wrapper">
    <div className="product-img">
     <img className='capitulo' src={CAPITULO} alt="" />
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>Harvest Vase</h1>
        <h2>by studio and friends</h2>
        <p>Harvest Vases are a reinterpretation</p>
      </div>
      <div className="product-price-btn">
        <p><span>78</span>$</p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>
  </div>

 
    </>
  )
}
