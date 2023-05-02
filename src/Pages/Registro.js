import React,{Component} from "react";
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
class Registro extends Component{
    render(){
        return(
          <div style={styles.body}>
            <form style={styles.form}>
              <h1 style={styles.h1}>Registro</h1>
              <ul style={styles.ul}>
                <li style={styles.li}>
                  <label for="nombre" required style={styles.label}>Nombre:</label>
                  <input type="text" name="nombre" id="nombre" style={styles.input}/>
                </li>
                <li style={styles.li}>
                  <label for="apellido" required style={styles.label}>Apellido:</label>
                  <input type="text" name="apellido" style={styles.input}></input>
                </li>
                <li style={styles.li}>
                  <label for="email" required style={styles.label}>Email:</label>
                  <input type="text" name="email" id="email" required style={styles.input}/>
                </li>  
                <li style={styles.li}>
                  <label for="telefono" required style={styles.label}>telefono:</label>
                  <input type="number" name="telefono" id="telefono" style={styles.input}/>
                </li>
                <li style={styles.li}>
                  <label for="contraseña" required style={styles.label}>Contraseña:</label>
                  <input type="password" name="contraseña" id="contraseña" style={styles.input}/>
                </li> 
                <br></br>
                <li style={styles.li}>
                  <label for="confirmar" required style={styles.label}>Confirmar contraseña:</label>
                  <input type="password" name="confirmar" id="confirmar" style={styles.input}/>  
                </li> 
                  <button style={styles.button}>Enviar</button>
              </ul>
            </form>
          </div>
    );
  }
}

export default Registro