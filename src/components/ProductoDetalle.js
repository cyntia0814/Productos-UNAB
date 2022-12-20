import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { PRODUCTODETALLE_GET_ENDPOINT } from "../connections/Endpoints"
import EliminarProductoBoton from "./EliminarProductoBoton"

const ProductoDetalle=()=> {

    const [producto, setProducto] =useState ([])
    const {id} = useParams()
    const navegar = useNavigate

    useEffect(()=>{
        axios.get(`${PRODUCTODETALLE_GET_ENDPOINT}/${id}`)
        .then(respuesta =>{
            setProducto(respuesta.data)
        })
        .catch(err=>{
            navegar(-1)
        })
    }, [id, navegar])
   

  return (
    <Container className="mt-3 mb-3 text-center">
        <h3>Detalles</h3>
      <Row className='justify-content-md-center'>
        <Col sm="12" md="8" lg="6">
            <div className="row justify-content-center text-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.imagen} />
                    <Card.Body>
                        <Card.Title>{producto.titulo}</Card.Title>
                        <Card.Subtitle>{producto.descripcion}</Card.Subtitle>
                        <Card.Text className="color-categoria">{producto.categoria}</Card.Text>
                        <Card.Title> $ {producto.precio}</Card.Title>
                        <EliminarProductoBoton id={producto.idproducto} titulo={producto.titulo} />
                    </Card.Body>
                </Card>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductoDetalle;