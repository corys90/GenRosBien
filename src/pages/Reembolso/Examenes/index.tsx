import { Accordion, Button, Container } from 'react-bootstrap';
import HomeBar from '../../../components/homeBar';
import Tip from '../../../components/tip';
import './style.css';

const ItemOptions = (props: any) => {
  return(
    <div className={`${props.clase} m-2 d-flex flex-row itmemLong`} style={{backgroundColor: props.colorBG}}>
         <input type="radio" className="me-2 ms-2" name={props.name}/>
         <div>
          <label className='fw-bold fontSize'>{props.nombre}</label><br /> 
          <label className='fontSize'>{props.nit}</label> 
         </div>
    </div>
  );
}

const PageExamenes = () => {


  return (
    <div style={{backgroundColor: "#EEF2F5"}}>
        <HomeBar/>
        <Container>
          <div style={{height: "54px", display: 'flex', alignItems: 'center'}}>Reembolso en línea | Completa los servicios a reembolsar</div>
        </Container>
        <div className="container sombra">
            <div className='fontTitle mb-3 border-bottom d-flex flex-row '>
              <div style={{width:"87%"}}>
                <label htmlFor="">REEMBOLSO EXÁMENES</label>
              </div>
              <div style={{width:"13%"}} className=" m-1 botonNuevoReembolso">
                  <Button className=" btn btn-danger" style={{width: "146px", borderRadius: "0px", fontSize: "12px"}}>
                    <i className="bi bi-plus-circle me-1"></i>Nuevo Reembolso
                  </Button>
              </div>
            </div>          
          <Accordion alwaysOpen>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>
                <div>
                  <label htmlFor=""><i className="bi bi-clipboard2-check me-1"></i>Reembolso de Exámnes</label>
                </div>
              </Accordion.Header>
              <Accordion.Body  style={{backgroundColor: "#EEF6F9"}}>
              </Accordion.Body>  
            </Accordion.Item>
            <div className='m-2'></div>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>
                <div>
                    <label htmlFor=""><i className="bi bi-shield-plus me-1"></i>Reembolso de Consultas</label>
                </div>                
              </Accordion.Header>
              <Accordion.Body style={{backgroundColor: "#EEF6F9"}}>
                <div style={{display: "flex", alignItems: 'center', flexDirection: "column"}}>
                  <ItemOptions
                    nombre="Cristian A. Cortes Sarmiento" clase="ps-1 pe-2 border rounded-pill " colorBG="#EEF2F5"
                    iconClas="bi bi-shield-plus" nit="73.160.918" name="ingDocs"/>
                    
                  <ItemOptions
                    nombre="Alberto C. Cortes Sarmiento" clase="ps-1 pe-2 border rounded-pill " colorBG="#EEF2F5"
                    iconClas="bi bi-shield-plus" nit="12.345.678 " name="ingDocs"/>
                  
                  <ItemOptions
                      nombre="Alberto C. Cortes Sarmiento" clase="ps-1 pe-2 border rounded-pill " colorBG="#EEF2F5"
                      iconClas="bi bi-shield-plus" nit="12.345.678 " name="ingDocs"/>
                </div>                
              </Accordion.Body>  
            </Accordion.Item>
          </Accordion>
          <div >
            <div className='m-4'>
              <Tip texto="Consideraciones que debes tener para subir los documentos" />
            </div>                      
            <div id="drop_zone" className="text-center mb-3 bg-tertiary dropZone"
                style={{border:"2px dashed #AAAAAA", margin: "auto"}}>
                <h3><label><i className="bi bi-upload "></i></label></h3>
                <p>Adjunta o arrastra la boleta, factura o bono si también tienes documentación adicional o respaldos de la prestación.</p>
                <input type="file" name="files" id="files" hidden={true} multiple/>
            </div>
            <div className="text-center">
                    <Button className=" btn btn-danger m-4" style={{width: "253px", borderRadius: "0px", fontSize: "16px"}}>
                      Solicitar Reembolso
                    </Button>
            </div>
          </div>
        </div>        
    </div>
  );
}

export default PageExamenes;