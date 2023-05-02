import React, {useState, useEffect} from "react";
import Producto from './Producto';
import {getAllProductos} from '../Service/ProductosService'
import { getByDisplayValue } from "@testing-library/react";
//no hay mas render en las funciones
const  styles ={
    button:{
        textAlign: "center",
        display: "block",
    },
    h1:{
        textAlign:"center",
    },
    h2:{
        textAlign:"center",
    },
    producto:{
        display: "flex",
        flexWrap: "wrap",
    }
}
function Productos(){
    const[listadoProductos, setListadoProductos] = useState([])
    const[response, setResponse] = useState({})
    const[loading, setLoading] = useState(true)
    const[buscar, setBuscar] = useState('ipod')
    /*
        function(){} es lo mismo que lo de useEffect
    */
   //equivalente al componentDidMount(se ejecuta solo una vez cuando el componente se muestra en pantalla)
    useEffect(
        ()=>{//call back
            /*fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod#options")//ayuda a captar el hhtp
            .then(res=>res.json())//metodo json- agarra el string y lo convierte en literal
            .then(data=>{
                console.log("data",data)
                setListadoProductos(data.results)
                setLoading(false)
            })
            .catch(e=>{
                console.log(e)
            })//promesa
            */
            const request = async ()=>{
                try{
                    setLoading(true)
                    const response = await getAllProductos(buscar)//metodo json- agarra el string y lo convierte en literal
                    console.log('response', response)
                     setListadoProductos(response.data.results)
                     setResponse(response.data)
                     setLoading(false)
                     console.log("productos", response)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
            }
            request()
         },
         [buscar]//array de dependencias vacio
     )
        const filtrar=()=>{
         setBuscar('motorola')
        }
        const reset=()=>{
         setBuscar('ipod')
        }
    if(loading){
        return(
            <>
            <div>Cargando ...</div>       
        </>
        )
    } else{
        return(
            <>
            <div>
                <h1 style={styles.h1}>Listado Productos</h1>
                <h2 style={styles.h2}>Cantidad de productos {response.paging.total}</h2>
                <div style={styles.button}>
                    <button onClick={filtrar}>Filtrar Producto</button>
                    <button onClick={reset} >Reset</button>
                </div>
                <div style={styles.producto}>
                    {listadoProductos.map(listadoProducto=><Producto nombre={listadoProducto.title} precio={listadoProducto.price} id={listadoProducto.id} thumbnail={listadoProducto.thumbnail}/>)}
                        
                </div>
            </div>
            
            
                    
            </>
        )
    }
}

export default Productos
