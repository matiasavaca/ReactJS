import React from 'react';
const styles = {
    body: {
      padding:"20px",
      backgroundColor: "rgb(117, 197, 135)", /* Color de fondo */
  },
    
    form:{
        padding: "20px",
       margin: "55px auto", /* Centramos el formulario */
       width: "300px",   /* Sin ancho no podemos centrar el formulario */
       backgroundColor: "white", /* Color blanco para el formulario */
       padding: "40px", /* separamos los bordes del form del resto de elementos */
       borderRadius: "10px", /* Redondeamos los bordes del form */
       textAlign: "center",
    },
    
    h1 :{
        color: "rgb(0, 68, 255)",
        textAlign: "Center",
    },
    input:{
      size: "10px",
      display: "block",
    },
    
    label :{
        display: "block", /* Ahora los inputs quedan debajo de los label */
        textAlign: "left",
    },
    
    li :{
        margin: "5px", /* dando márgenes a todos los elementos de la lista */
        display: "inline",
    },
    ul:{
      listStyleType: "none",
      width: "50%",
      marginLeft: "30px"
    },
  
    button: {
        margin: "25px",
        width: "50%",
        backgroundColor: "rgb(96, 160, 219)",
        borderRadius: "10px",
    }
  }


function Login(){
        return(
          <div style={styles.body}>
            <form style={styles.form}>
              <h1 style={styles.h1}>Login</h1>
              <ul style={styles.ul}>
                <li style={styles.li}>
                  <label for="mail" required style={styles.label}>Email:</label>
                  <input type="mail" name="mail" id="mail" required style={styles.input}/>
                </li>  
                <li style={styles.li}>
                  <label for="contraseña" required style={styles.label}>Contraseña:</label>
                  <input type="password" name="contraseña" id="contraseña" style={styles.input}/>
                </li> 
                  <button style={styles.button}>Iniciar sesion</button>
              </ul>
            </form>
          </div>
    );
}

export default Login