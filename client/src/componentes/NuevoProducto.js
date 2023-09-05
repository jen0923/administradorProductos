import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NuevoProducto = () => {
const [nombre, setNombre]= useState("");
const [precio, setPrecio]= useState("");
const [descripcion, setDescripcion]= useState("");
const navigate =useNavigate();

const guardarProducto = e => {
    e.preventDefault();
    axios.post ("http://localhost:8000/api/productos",{
        nombre,
        precio,
        descripcion 
    })
    .then (res => {
        setNombre("");
        setPrecio ("");
        setDescripcion("");
        navigate ("/") // hago que me redirija a la pagina principal (colocamos la ruta)
    })(err =>{
        console.log(err); 
    })

}
    return (
        <div>
            <h1>Nuevo Producto</h1>
            <form onSubmit={guardarProducto}>
                <div>
                    <label>Nombre:</label>
                    <input id= "nombre" name ="nombre" type ="text" onChange={e => setNombre(e.target.value)} value={nombre}/> 
                </div>
                <div>
                    <label>Precio:</label>
                    <input id= "precio" name ="precio" type ="text" onChange={e => setPrecio(e.target.value)} value={precio}/>
                </div>
                <div>
                    <label>Descripcion:</label>
                    <input id= "descripcion" name ="descripcion" type ="text" onChange={e => setDescripcion(e.target.value)} value={descripcion}/>
                </div>
                <input type= "submit" className="btn btn-success mt-3" value= "Guardar Producto"/>
            </form>

        </div>
    )
}

export default NuevoProducto;
