import { Button, Container } from 'react-bootstrap';
import HomeBar from '../../../components/homeBar';
import Tip from '../../../components/tip';
import './style.css';

const ItemOptions = (props: any) => {
  return(
    <div className={`${props.clase} m-2 d-flex flex-row itemLong`} style={{backgroundColor: props.colorBG}}>
         <input type="radio" className="me-2 ms-2" name={props.name}/>
         <div>
          <label className='fw-bold'>{props.nombre}</label><br /> 
          <label htmlFor="">{props.nit}</label> 
         </div>
    </div>
  );
}

const PageIngresoDoc = () => {

  return (
    <div style={{backgroundColor: "#EEF2F5"}}>
        <HomeBar/>
        <Container>
          <div style={{height: "54px", display: 'flex', alignItems: 'center'}}>Reembolso en línea | Completa los servicios a reembolsar</div>
        </Container>
        <div className="container sombra">
            <div className='fontTitle mb-3 border-bottom d-flex flex-row '>
              <div style={{width:"86%"}}>
                <label htmlFor="">INGRESO DE DOCUMENTACIÓN</label>
              </div>
              <div style={{width:"14%"}} className=" m-1 botonNuevoReembolso">
                  <Button className=" btn btn-danger" style={{width: "156px", borderRadius: "0px", fontSize: "12px"}}><i className="bi bi-plus-circle me-1"></i>Nuevo Reembolso</Button>
              </div>
            </div>  
            <div style={{display: "flex", alignItems: 'center', flexDirection: "column"}}>
              <ItemOptions
                nombre="Cristian A. Cortes Sarmiento" clase="ps-1 pe-2 border rounded-pill " colorBG="#EEF2F5"
                iconClas="bi bi-shield-plus" ancho="380px" nit="73.160.918" name="ingDocs"/>
                
              <ItemOptions
                nombre="Alberto C. Cortes Sarmiento" clase="ps-1 pe-2 border rounded-pill " colorBG="#EEF2F5"
                iconClas="bi bi-shield-plus" ancho="380px" nit="12.345.678 " name="ingDocs"/>
              
              <ItemOptions
                  nombre="Alberto C. Cortes Sarmiento" clase="ps-1 pe-2 border rounded-pill " colorBG="#EEF2F5"
                  iconClas="bi bi-shield-plus" ancho="380px" nit="12.345.678 " name="ingDocs"/>
              <div className='m-3'></div>
              <Tip texto="Consideraciones que debes tener para subir los documentos" />
              <div className='m-3'></div>
              <div id="drop_zone" className="text-center mb-3 dropZone"
                  style={{border:"2px dashed #AAAAAA"}}>
                  <h3><label><i className="bi bi-upload "></i></label></h3>
                  <p>Adjunta o arrastra la boleta, factura o bono si también tienes documentación adicional o respaldos de la prestación.</p>
                  <input type="file" name="files" id="files" hidden={true} multiple/>
              </div>


            </div>
        </div>        
    </div>
  );
}

export default PageIngresoDoc;