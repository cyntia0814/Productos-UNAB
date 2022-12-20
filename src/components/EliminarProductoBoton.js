import axios from "axios"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { ELIMINARPRODUCTO_DELETE_ENDPOINT } from "../connections/Endpoints"

const EliminarProductoBoton= ({id, titulo})=>{
    const navegar=useNavigate()

    const eliminar= async ()=>{
        axios.delete(`${ELIMINARPRODUCTO_DELETE_ENDPOINT}/${id}`)
        .then(respuesta =>{
            navegar("/")
        }).catch(err=>{
            console.error(err)
        })
    }

    const crearAlerta=()=>{
        const titul=`Eliminar producto \n ¿Desea eliminar el producto ${titulo}?`
        return (window.confirm(titul) === true) ? eliminar() : ()=>{}
    }

        return(
            <Button variant="danger" size="sm"
                onClick={crearAlerta}
            >
                Eliminar
            </Button>
        )
}

export default EliminarProductoBoton;
