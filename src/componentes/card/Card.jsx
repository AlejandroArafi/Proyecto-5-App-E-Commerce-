import { useState } from "react";
import CAPITULO from "../../assets/images/CAPITULO.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// import './Card.css'
import { Count } from "../count/Count";

export const Card = () => {
  const [showModal, setshowModal] = useState(false);

  const handleClose = () => {
    setshowModal(false);
  };
  const handleShow = () => {
    setshowModal(true);
  };

  // fin logica modal

  return (
    <>
      {/* card */}

      <div className="cards">
        <div className="card-img">
          <img src={CAPITULO} alt="capitulo" />
        </div>
        <div className="card-body">
          <h2>Vino Odfjell Capitulo</h2>
          
          <h4>$6.990</h4>
        </div>
        <div className="card-footer">
          <button onClick={handleShow}>Comprar </button>
        </div>
      </div>

      {/* fin card */}

      {/* inicio logica modal */}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Confirmar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-img-modal">
            <img src={CAPITULO} alt="capitulo" />
          </div>
          
          <div className="card-body-modal">
            <h2>Vino Odfjell Capitulo</h2>
            <p>
              Capítulo es un ensamblaje que nace de las múltiples leyendas
              escritas, vinculadas a símbolos descubiertos e historias contadas
              durante largos viajes en el mar.
            </p>
           <h4>$6.990</h4>
           <Count/>
           
             </div>
             
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* fin modal */}
    </>
  );
};

