import { Pagination } from 'react-bootstrap';
import HomeBar from '../../components/homeBar';
import Tabla from '../../components/tabla';

const stilo: object = {
  display: "flex", 
  flexDirection: "row", 
  justifyContent: 'center'
}

function PageHome() {

  const act = true;
  const dataUltimosMov: string[][] = [
    ["Dental", "24-10-2023", "$50.000", "En Proceso"],
    ["Dental", "24-10-2022", "$60.000", "En Proceso"],
    ["Dental", "24-10-2020", "$40.000", "Rechazado"],
    ["Dental", "24-10-2019", "$50.000", "En Proceso"],
    ["Limpieza", "24-10-2022", "$60.000", "En Proceso"],
    ["Dental", "24-10-2021", "$20.000", "Rechazado"],
    ["Dental", "24-10-2023", "$50.000", "En Proceso"],
    ["Dental", "24-10-2022", "$60.000", "En Proceso"],
    ["Dental", "24-10-2020", "$40.000", "Rechazado"],
    ["Dental", "24-10-2019", "$50.000", "En Proceso"],
    ["Limpieza", "24-10-2022", "$60.000", "En Proceso"],
    ["Dental", "24-10-2021", "$20.000", "Rechazado"],
  ];

  const dataResumen: string[][] = [
    ["Dental", "$20.000", "$50.000", "En Proceso"],
    ["Dental", "$50.000", "$60.000", "En Proceso"],
    ["Dental", "$40.000", "$40.000", "Rechazado"],
    ["Dental", "$40.000", "$50.000", "En Proceso"],
    ["Limpieza", "$60.000", "$60.000", "En Proceso"],
    ["Dental", "$60.000", "$20.000", "Rechazado"],
    ["Dental", "$60.000", "$50.000", "En Proceso"],
    ["Dental", "$20.000", "$60.000", "En Proceso"],
    ["Dental", "$60.000", "$40.000", "Rechazado"],
    ["Dental", "$20.000", "$50.000", "En Proceso"],
    ["Limpieza", "$20.000", "$60.000", "En Proceso"],
    ["Dental", "$20.000", "$20.000", "Rechazado"],
  ];

  return (
    <div>
        <HomeBar/>
        <div style={{height: "54px"}}></div>     
        <Tabla 
          header="ÚLTIMOS MOVIMIENTOS"
          columHeader={["Tipo", "Fecha", "Monto", "Estado"]}
          data={dataUltimosMov}
          nfilasShown="5"
        />  

        <div className='container'>
          <div style={stilo} >
            <Pagination className='text-dark'>
                <Pagination.First />
                <Pagination.Prev />
                {
                  act ? <Pagination.Item active>{1}</Pagination.Item>
                  : <Pagination.Item >{1}</Pagination.Item>
                }
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
          </div>
        </div>

        <div style={{height: "60px"}}></div> 
        <Tabla 
          header="RESUMEN DE PRESTACIONES CON TOPE ANUAL PARA EL GRUPO FAMILIAR"
          columHeader={["Tipo", "Total", "Utilizado", "Disponible"]}
          data={dataResumen}
          nfilasShown="5"
        />   

        <div className='container'>
          <div style={stilo} >
            <Pagination className='text-dark'>
                <Pagination.First />
                <Pagination.Prev />
                {
                  act ? <Pagination.Item active>{1}</Pagination.Item>
                  : <Pagination.Item >{1}</Pagination.Item>
                }
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
          </div>
        </div>
    </div>
  );
}

export default PageHome;