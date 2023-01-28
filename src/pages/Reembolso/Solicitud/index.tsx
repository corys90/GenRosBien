import { Button, Container } from 'react-bootstrap';
import HomeBar from '../../../components/homeBar';
import './style.css';

const muela = require("./muela.png");

const ItemOptions = (props: any) => {
  return(
    <div className={`${props.clase} m-2`} style={{width:props.ancho, backgroundColor: props.colorBG}}>
         <label>
            <i className={`${props.iconClas} m-2 `}></i>
            {props.text}
         </label>
    </div>
  );
}

const PageReembolsoSolicitud = () => {

  return (
    <>
        <HomeBar/>
        <Container>
          <div style={{height: "54px", display: 'flex', alignItems: 'center'}}>Reembolso en línea | Selecciona tipo de solicitud</div>
        </Container>
        <div className="container sombra">
            <div className='fontTitle mb-3 border-bottom'>
              <label htmlFor="">SOLICITUD</label>
            </div>  
            <div style={{display: "flex", alignItems: 'center', flexDirection: "column"}}>
              <ItemOptions
                text="Consultas" clase="ps-1 pe-2 border rounded-pill " colorBG="#EEF2F5"
                iconClas="bi bi-shield-plus" ancho="380px" />
              <ItemOptions
                text="Exámenes" clase="ps-1 pe-2 border rounded-pill" colorBG="#EEF2F5"
                iconClas="bi bi-clipboard2-check " ancho="380px" />
              <ItemOptions
                text="Medicamentos" clase="ps-1 pe-2 border rounded-pill" colorBG="#EEF2F5"
                iconClas="bi bi-journal-plus" ancho="380px" />         
              <div className='ps-1 pe-2 border rounded-pill m-2' style={{backgroundColor: "#EEF2F5", width: "380px"}}>
                <label className='ps-1'>
                    <img src="./muela.png" alt="" srcSet={muela} width={16} height={16} className='m-1'/>
                    Dental
                </label>
              </div>
              <ItemOptions
                text="Ópticos" clase="ps-1 pe-2 border rounded-pill" colorBG="#EEF2F5"
                iconClas="bi bi-eyeglasses" ancho="380px" />  
            </div>
            <div className='pt-5 pb-5 d-flex justify-content-center'>
                <Button className=" btn btn-secondary me-5" style={{width: "183px", borderRadius: "0px"}}><i className="bi bi-caret-left"></i>Volver</Button>
                <Button className=" btn btn-danger ms-5" style={{width: "183px", borderRadius: "0px"}}>Siguiente<i className="bi bi-caret-right"></i></Button>
            </div>  
        </div>        
    </>
  );
}

export default PageReembolsoSolicitud;