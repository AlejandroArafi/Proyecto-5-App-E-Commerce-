import './Cards.css'
import CAPITULO from '../../assets/images/CAPITULO.png'





export const Cards = () => {
  return (
    <>
    <div className="container">
        <div className="cards">
            <div className="card-img">
                <img src={CAPITULO} alt="capitulo" />
            </div>
            <div className="card-body">
                <h2>Vino Odfjell Capitulo</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores autem exercitationem architecto ad fugiat nemo aspernatur error, blanditiis ducimus corrupti!</p>
            </div>
            <div className="card-footer">
                <button>Read More</button>
            </div>
        </div>

        <div className="cards">
            <div className="card-img">
                <img src={CAPITULO} alt="capitulo" />
            </div>
            <div className="card-body">
                <h2>Vino Odfjell Capitulo</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores autem exercitationem architecto ad fugiat nemo aspernatur error, blanditiis ducimus corrupti!</p>
            </div>
            <div className="card-footer">
                <button>Read More</button>
            </div>
        </div>

        <div className="cards">
            <div className="card-img">
                <img src={CAPITULO} alt="capitulo" />
            </div>
            <div className="card-body">
                <h2>Vino Odfjell Capitulo</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores autem exercitationem architecto ad fugiat nemo aspernatur error, blanditiis ducimus corrupti!</p>
            </div>
            <div className="card-footer">
                <button>Read More</button>
            </div>
        </div>
    </div>
    
    </>
  )
}
