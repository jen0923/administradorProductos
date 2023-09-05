import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const TodosProductos = () => {
const [productos, setProductos] =useState ([]);


useEffect( () => {
    axios.get ("http://localhost:8000/api/productos") // Peticion desde donde quiero traer la info
    .then(res=> { // como respuesta va a ser el listado de productos
        setProductos(res.data) // todo lo que recibimos de Axios se llama data
    })
    .catch(err=>console.log(err));

}, []);

const borrarProducto = idProd =>  {
    axios.delete ("http://localhost:8000/api/productos/"+idProd) // Peticion desde donde quiero traer la info
    .then( res => { 
        let nuevaLista = productos.filter(producto => producto._id !== idProd);  
        setProductos(nuevaLista);
    })
    .catch (err => console.log(err));

}


return (
    <div>
        <h1>Administrador de Productos</h1>
        <Link to="/nuevo" classaName= "btn btn-success">Nuevo Producto</Link>
        <table className="table table-hover">
            <thead> 
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripcion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((producto, index)=>( // atraves de un map los muestro en la tabla, recibe el producto y el index
                        <tr key= {index}> 
                            <td>{producto.nombre}</td> 
                            <td>{producto.precio}</td>
                            <td>{producto.descripcion}</td>
                            <td>
                                <Link to={`/producto/${producto._id}`} className="btn btn-primary">Detalle</Link>
                                <button className="btn btn-danger" onClick={()=>borrarProducto(producto._id)} >Borrar</button>
                            </td>
                        </tr>

                    ))
                }
            </tbody>
        </table>
    </div>
)


}
export default TodosProductos;