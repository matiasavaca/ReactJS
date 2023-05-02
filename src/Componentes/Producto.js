import React, {useState} from 'react';
import {Link} from "react-router-dom";
const styles = {
    producto:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width:"230px",
        height: "400px",
        border: "1px solid",
        borderRadius: "25px",
        margin: "30px",
        boxShadow:"40px 20px 100px ",
    },
    boton:{
        display:"block",
    },
    principio:{
        height:"200px",
        textAlign: "center",
        marginRight: "30px"
    },
    arriba:{
        textAlign: "center",
        width: "200px",
        height:"73px",
        margin:"-20px",
        marginBottom:"10px"
    },
    abajo:{
        width: "150px",
        height: "200px",
        border: "1px solid",
        overflow: "hidden",
        borderRadius:"15px",
        backgroundColor: "white",
        position:"relative",
    },
    img:{
        width:'70%',
        borderRadius: "15px",
        position:"absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "auto",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    final:{
        height:"50px",
        position:"relative",
        width:"200px",
        marginLeft:"40px"
    }
    
}
function Producto(props){
    const{nombre,descripcion,precio,children,id,thumbnail} = props
    //esto hace que aparece una palabra aparezca con useState
    const [agradece, setAgradece] = useState([])
    const handleClick = () =>{
        setAgradece('¡Gracias Por Comprar!')
    }
    return(
        <>
            <div style={styles.producto}>
                <ul style={styles.principio}>
                    <div style={styles.arriba}>
                        <div>
                            <p>{nombre}</p>
                        </div>
                        <div>
                        <p>{descripcion || ''}</p>
                        </div>
                    </div>
                    {children}
                <div style={styles.abajo}>
                    <div>
                        <img src={thumbnail} style={styles.img}></img>
                    </div> 
                </div>           
                </ul>
                <ul style={styles.final}>
                        <div style={styles.boton}>
                            <p>${precio}</p>
                            <button onClick={handleClick} style={styles.boton}>Compra</button>
                            <Link to={'/producto/'+id}> Ver Detalle</Link>
                        </div> 
                        <p>{agradece}</p>
                    </ul>
            </div>
            
        </>
    )
}
export default Producto
