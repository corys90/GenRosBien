import { Button, Container } from 'react-bootstrap';
import HomeBar from '../../../components/homeBar';
import './style.css';

const ItemOptions = (props: any) => {
  return(
    <div className={`${props.clase} m-2 d-flex flex-row`} style={{width:props.ancho, backgroundColor: props.colorBG}}>
         <label className="m-2" style={{fontSize: "22px", color: "#58CE64"}}><i className="bi bi-check-circle "></i></label>
         <div>
          <label className='fw-bold'>{props.nombre}</label><br /> 
          <label htmlFor="">{props.nit}</label> 
         </div>
    </div>
  );
}

const PageResumenSolicitud = () => {

  return (
    <>
        <HomeBar/>
        <Container>
          <div style={{height: "54px", display: 'flex', alignItems: 'center'}}>Reembolso en línea | Tus solicitudes han sido ingresadas correctamente</div>
        </Container>
        <div className="container sombra">
            <div className='fontTitle mb-3 border-bottom d-flex flex-row '>
              <div style={{width:"88%"}}>
                <label htmlFor="">RESUMEN SOLICITUD</label>
              </div>
            </div>  
            <div className='gap-4' style={{display: "flex", alignItems: 'center', flexDirection: "column"}}>
                <div >
                  <label style={{fontSize: "128px", color: "#58CE64"}}><i className="bi bi-check-circle "></i></label>
                </div>
                
                <div >
                  <label className='fw-bold'>Los Números de solicitud de reembolso son:</label>
                </div>
                <ItemOptions
                  nombre="Cristian A. Cortes Sarmiento" clase="ps-1 pe-2 border rounded-pill " colorBG="#EEF2F5"
                  iconClas="bi bi-shield-plus" ancho="380px" nit="73.160.918" name="ingDocs"/>
                  
                <ItemOptions
                  nombre="Alberto C. Cortes Sarmiento" clase="ps-1 pe-2 border rounded-pill " colorBG="#EEF2F5"
                  iconClas="bi bi-shield-plus" ancho="380px" nit="12.345.678 " name="ingDocs"/>
                
                <ItemOptions
                    nombre="Alberto C. Cortes Sarmiento" clase="ps-1 pe-2 border rounded-pill " colorBG="#EEF2F5"
                    iconClas="bi bi-shield-plus" ancho="380px" nit="12.345.678 " name="ingDocs"/>

                <div className='d-flex flex-row gap-5'>
                    <Button className=" btn btn-danger m-4" style={{width: "253px",  height: "48px", borderRadius: "0px", fontSize: "16px"}}>Nuevo Reembolso</Button>
                    <Button className=" btn btn-danger m-4" style={{width: "253px", borderRadius: "0px", fontSize: "16px"}}>Ir al Home</Button>
                </div>
            </div>
        </div>        
    </>
  );
}

export default PageResumenSolicitud;