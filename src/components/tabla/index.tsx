import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './style.css';

function Tabla(props: any) {

  const filter = props.filter;

  const filterHtml = () => {
    return(
      <div className='container sombra filtro' >
        <div className="form-check form-check-inline ">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="0"/>
          <label  >Todos</label>
        </div>
        <div className="form-check form-check-inline ">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="1"/>
          <label >En proceso</label>
        </div>
        <div className="form-check form-check-inline ">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="2" />
          <label  >Pagados</label>
        </div>
        <div className="form-check form-check-inline ">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" />
          <label  >Rechazados</label>
        </div>
      </div>
    );
  }

  return (
    <Container>
        <div className='fontTitle mb-3 border-bottom'>
          {props.header}  
        </div>
        { 
          (filter === true) ? filterHtml() : <></> 
        }
        <div className='table-responsive'>
          <Table striped bordered hover className='sombra table-responsive'>
            <thead >
              <tr className='fontColumnHeader sombra ' >
                {
                  props.columHeader.map((title: string, index: number) => <th  key={index}>{title}</th>)
                }
              </tr>
            </thead>
                <tbody className='fontRows'>
                    {
                        props.data.map((data: string[], index: number) => 
                          <tr key={index}>
                            {data.map((value: string, index: number)=> <td key={index}>{value}</td>)}
                          </tr>
                        )
                    }
                </tbody>
          </Table>
        </div>

    </Container> 
  );
}

export default Tabla;