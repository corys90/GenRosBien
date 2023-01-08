import React, { useState } from 'react';
import MensajeModal from '../../modal';
import logo from './relaxed-woman-enjoying-sea.png';
import './style.css';

function FrmRecoveryPwd(props) {

  const [show, setShow] = useState(false);

  const  handlerBtnSolicitar = () => {
    setShow(true);
  }

  const handleBtnClose = () =>{ 
    setShow(false);
  }

  return (
     <div>
        <div className='containerLogin'>
          <div className='formularioLogin'>
            <div className='login'>
              <div className='titulo mx-auto' >
                <label>RECUPERACIÓN DE CONTRASEÑA</label>
              </div>
              <form>
                <div style={{height: "60px"}}></div>
                <div className=" mb-3 divUserPwd">
                  <input type="text" className="form-control" 
                  style={{width: 341}} id="txtRut" placeholder="Ingrese su RUT"/>
                </div>              
              </form>
              <div style={{height: "120px"}}></div>
              <div className="mb-3 divOlvidoPwd">
                <button  type="button" className=" btnIngresar" onClick={handlerBtnSolicitar}>Solicitar</button>
                <button  type="button" className=" btnVolver"  onClick={handlerBtnSolicitar}>Volver</button>
              </div>
            </div>
            <div className=" img-fluid divImgRelax">
              <img src={logo} alt="" />
            </div>
          </div>       
        </div>  
        <MensajeModal 
              show={show}
              mensaje="Las instrucciones para obtener tu contraseña fueron enviadas al mail:"
              email="Corys90@hotmail.com"
              handlerHide={() => handleBtnClose()}
        /> 

     </div>
  );
}

export default FrmRecoveryPwd;