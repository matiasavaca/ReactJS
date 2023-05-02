import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getByIdProductos} from '../Service/ProductosService';

const styles = {
    container:{
        width: "1000px",
        border: "1px solid",
        textAlign: "center",
        margin: "30px",
    },
    detalle:{
        
        
        columnCount:"2",
    },
    img:{
        width:"300px",
    },
    boton:{
        margin: "20px",
    }

}

function Detalle(){
    const {id} = useParams()
    console.log("id producto", id)
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(
        ()=>{
            const request = async ()=>{
                try{
                    setLoading(true)
                    const response = await getByIdProductos(id)//metodo json- agarra el string y lo convierte en literal
                    console.log('response', response)
                    setProducto(response.data)
                    setLoading(false)
                    console.log("productos", response)
                }catch(e){
                    console.log(e)
                    setLoading(false)
                }
            }
            request()
        },
        [id]
    )
    if(loading){
        return(
            <>
            <div>Cargando ...</div>       
        </>
        )
    }else{
        return(
            <>  
                <div style={styles.container}>
                    <div style={styles.detalle}>
                        <p>{producto.title}</p>
                        <p>{producto.price}</p>
                        <p>{producto.condition}</p>
                        {producto.pictures.map(picture=><img src={picture.url} style={styles.img}/>)}
                    </div>
                    <div>
                        <button style={styles.boton}>Comprar</button>
                    </div>
                </div>
            </>
        )
    }  
}

export default Detalle

//captamos el id