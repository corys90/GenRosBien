import React, { useState } from 'react';
import MensajeModal from '../../modal';
import './style.css';
const logo = require( './relaxed-woman-enjoying-sea.png');

function FrmResetPwd() {

  const [show, setShow] = useState(false);

  const  handlerBtnReestablecer = () => {
    setShow(true);
  }

  const handleBtnClose = () =>{ 
    setShow(false);
  }

  return (
    <div className='containerLogin'>
        <div className='formularioLogin'>
          <div className='login'>
            <div className='titulo' >
              <label>REESTABLECER CONTRASEÑA</label>
            </div>
            <form>
              <div className=" mb-3 divUserPwd">
                <input type="text" className="form-control" 
                  style={{width: 341}} id="txtUser" placeholder="Nueva contraseña"/>
              </div>
              <div style={{height: "20px"}}></div>
              <div className=" mb-3 divUserPwd">
                <input type="password" className="form-control" 
                style={{width: 341}} id="txtPassword" placeholder="Repita contraseña"/>
              </div>              
            </form>
            <div style={{height: "100px"}}></div>
            <div className="mb-3 divOlvidoPwd">
              <button  type="button" className=" btnReestablecer" onClick={handlerBtnReestablecer}>Reestablecer</button>
            </div>
          </div>
          <div className=" img-fluid divImgRelax">
            <img src={logo} alt="" />
          </div>
        </div>  
        <MensajeModal 
              show={show}
              mensaje="Su contraseña ha sido reestablecida con éxito"
              email=""
              handlerHide={() => handleBtnClose()}
        />      
    </div> 
  );
}

export default FrmResetPwd;