import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import MensajeModal from '../../modal';
import './style.css';
const logo = require( './relaxed-woman-enjoying-sea.png');

const bordeTextBox = {
  width: "90%", 
  border: "0px",
  borderStyle: "solid",
  borderRadius: "0px",
  borderBottomWidth: "2px",
  borderColor: "#999999",
  backgroundColor: "white"
}

function FrmResetPwd() {

  const [show, setShow] = useState(false);

  const  handlerBtnReestablecer = () => {
    setShow(true);
  }

  const handleBtnClose = () =>{ 
    setShow(false);
  }

  return (
    <div className='containerLogin'  style={{backgroundColor: "#EEF2F5"}}>
        <div className='formularioLogin'  style={{backgroundColor: "white"}}>
          <div className='login'>
            <div className='titulo' >
              <label>REESTABLECER CONTRASEÑA</label>
            </div>
            <form>
              <div className=" mb-3 divUserPwd">
                <input type="text" className="form-control" 
                  style={bordeTextBox}  id="txtUser" placeholder="Nueva contraseña"/>
              </div>
              <div style={{height: "20px"}}></div>
              <div className=" mb-3 divUserPwd">
                <input type="password" className="form-control" 
                style={bordeTextBox}  id="txtPassword" placeholder="Repita contraseña"/>
              </div>              
            </form>
            <div style={{height: "100px"}}></div>
            <div className="mb-3 divOlvidoPwd">
              <Button className="btn btn-danger rounded-0 " onClick={handlerBtnReestablecer}  style={{width: "90%", height: "45px"}}>Reestablecer</Button>
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