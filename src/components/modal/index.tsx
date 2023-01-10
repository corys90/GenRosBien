import React from 'react';
import Modal from 'react-bootstrap/Modal';
import logo from '../modal/Vector.png';
import '../modal/style.css';

function MensajeModal(props) {

  return (
      <div>
            <Modal show={props.show} centered="true" >
                <Modal.Header >
                    <Modal.Title className='mx-auto'>
                        <img src={logo} alt="" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-auto modalBody'>
                    <label >{props.mensaje}</label>
                    <strong>{props.email}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="mx-auto btnModalReset" onClick={() => props.handlerHide()}>
                        Aceptar
                    </button>
                </Modal.Footer>
            </Modal>
      </div>
  );
}

export default MensajeModal;