import React,{useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const VerProducto =() => {

    const {id} =useParams();// obtengo el identificador que eStamos  enviando atraves de la URL
    const [producto, setProducto]= useState ({}); //

    useEffect(()=>{ // Antes que se monte el componente hago la conexion a la API colocando la ruta
        axios.get("http://localhost:8000/api/productos/"+ id) // concateno el identificador que recibimos en React 
        
        .then(res =>{
            setProducto( res.data); // obtengo la informacion con la data que me dan
        })
        .catch(err=> console.log (err));
    }, []) // como segundo parametro es lo que se esta "escuchando [])"

    return(
         <div className="card">
            <h1>{producto.nombre}</h1>
            <h2>{producto.precio}</h2>
            <p>  
               {producto.descripcion}
            </p>
            <Link to="/" className="btn btn-success mt-3">Regresar</Link>

         </div>
    )
}

export default VerProducto;