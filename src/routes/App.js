import '../css/App.css';
import Navegacion from '../layouts/Navegacion';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductosCreados from '../pages/ProductosCreados';
import CrearProducto from '../pages/CrearProducto';
import Footer from '../layouts/Footer';
import ProductoDetalle from '../components/ProductoDetalle';


function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path='/' element={<ProductosCreados />}/>
        <Route path='/crearproducto' element={<CrearProducto />}/>
        <Route path='/producto/:id' element={<ProductoDetalle />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
