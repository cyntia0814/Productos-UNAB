import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function ProductoCard({producto}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.titulo}</Card.Title>
        <Card.Text> $ {producto.precio}</Card.Text>
        <Button variant='primary'>
        <Link to={`/producto/${producto.idproducto}`} className="color-boton">
          Detalle
        </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;