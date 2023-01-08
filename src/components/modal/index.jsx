import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import logo from '../modal/Vector.png';
import './style.css';

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
                    <label style={{}} >{props.mensaje}</label>
                    <strong>{props.email}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="mx-auto btnIngresar" onClick={() => props.handlerHide()}>
                        Aceptar
                    </button>
                </Modal.Footer>
            </Modal>
      </div>
  );
}

export default MensajeModal;