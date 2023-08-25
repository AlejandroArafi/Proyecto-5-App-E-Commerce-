import './Cards.css'
import CAPITULO from '../../assets/images/CAPITULO.png'
import { Card } from '../card/Card'

export const Cards = () => {
  return (
    <>
    <div className="container">
        <Card/>
        
       

        <div className="cards">
            <div className="card-img">
                <img src={CAPITULO} alt="capitulo" />
            </div>
            <div className="card-body">
                <h2>Vino Odfjell Capitulo</h2>
                <h4>$6.990</h4>
            </div>
            <div className="card-footer">
                <button>Comprar</button>
            </div>
        </div>

        <div className="cards">
            <div className="card-img">
                <img src={CAPITULO} alt="capitulo" />
            </div>
            <div className="card-body">
                <h2>Vino Odfjell Capitulo</h2>
                <h4>$6.990</h4>
            </div>
            <div className="card-footer">
                <button>Comprar</button>
            </div>
        </div>
    </div>
    
    </>
  )
}
