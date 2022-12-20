import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PRODUCTOSCREADOS_GET_ENDPOINT } from '../connections/Endpoints';
import ProductoCard from '../components/ProductoCard';

function ProductosCreados() {

    const [productos, setProductos] =useState ([])

    useEffect(()=>{
        axios.get(PRODUCTOSCREADOS_GET_ENDPOINT)
        .then(respuesta =>{
            console.log(respuesta.data)
            setProductos(respuesta.data)
        })
        .catch(err=>{
            console.error(err)
        })
    }, [])
   

  return (
    <Container className="mt-3 mb-3 text-center">
        <h3>Productos Creados</h3>
      <Row className='justify-content-center'>
        <Col sm="12" md="8" lg="6">
            <Row className='justify-content-center'>
                {productos.map(producto=> <ProductoCard key={producto.idProducto} producto={producto}/>)}
            </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductosCreados;