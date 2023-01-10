import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import './style.css';

function Tabla(props: any) {

  const [show, setShow] = useState(false);

  const  handlerBtnBefore = () => {
    setShow(true);
  }

  const handleBtnNext = () =>{ 
    setShow(false);
  }

  return (
    <div className='container'>
        <div className='fontTitle'>
          {props.header}  
        </div>

        <Table striped bordered hover className='sombra'>
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
  );
}

export default Tabla;