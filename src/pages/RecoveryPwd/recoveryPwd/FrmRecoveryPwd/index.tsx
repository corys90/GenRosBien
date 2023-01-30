import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import MensajeModal from '../../../../components/modal';
import './style.css';

const logo =  require('./relaxed-woman-enjoying-sea.png');
const bordeTextBox = {
  width: "90%", 
  border: "0px",
  borderStyle: "solid",
  borderRadius: "0px",
  borderBottomWidth: "2px",
  borderColor: "#999999",
  backgroundColor: "white"
}

function FrmRecoveryPwd(props: any) {

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const  handlerBtnSolicitar = () => {
    setShow(true);
  }

  const  handlerBtnVolver = () => {
    navigate("/");
  }  

  const handleBtnClose = () =>{ 
    setShow(false);
  }

  return (
     <div>
        <div className='containerLogin'  style={{backgroundColor: "#EEF2F5"}}>
          <div className='formularioLogin'  style={{backgroundColor: "white"}}>
            <div className='login'>
              <div className='titulo mx-auto' >
                <label>RECUPERACIÓN DE CONTRASEÑA</label>
              </div>
              <form>
                <div style={{height: "60px"}}></div>
                <div className=" mb-3 divUserPwd">
                  <input type="text" className="form-control" 
                  style={bordeTextBox} id="txtRut" placeholder="Ingrese su RUT"/>
                </div>              
              </form>
              <div style={{height: "120px"}}></div>
              <div className="gap-3 divOlvidoPwd ">
                <Button  className=" btn-danger btnIngresar" style={{borderRadius: "0"}} onClick={handlerBtnSolicitar} >
                  Solicitar
                </Button>
                <Button  className=" btn-secondary btnVolver" style={{borderRadius: "0"}}  onClick={handlerBtnVolver} >
                  Volver
                </Button>
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