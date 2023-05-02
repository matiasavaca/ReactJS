import React from 'react';
import {Link} from "react-router-dom";
const styles={
    estilo:{
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
   },
   body :{
    fontFamily: "cursive",
   },
   a :{
    textDecoration: "none",
   },
   li: {
    listStyle: "none",
   },
   ul:{
        listStyle: "none",
   },
   navbar:{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "teal",
    color: "#fff",
   },
   navLinksA:{
    color: "#fff",
   },
   /* LOGO */
   logo: {
    fontSize: "32px",
   },
   /* NAVBAR MENU */
   menu:{
    display: "flex",
    gap: "1em",
    fontSize: "18px",
    ':hover':"background-color: #4c9e9e;",
   },
   menu_li:{
    backgroundColor: "#4c9e9e",
    borderRadius: "5px",
    transition: "0.3s ease",
    
   },
   menu_li :{
    padding: "5px 14px",
   },
   /* DROPDOWN MENU */
   services:{
    position: "relative", 
   },
   services:{
    display: "block",
    hover_dropdown:","
   },

}
function Menu(){
    return(
    <div style={styles.estilo}>
        <nav style={styles.navbar}>
     
        <div style={styles.logo}>PAG</div>
     
     <ul style={styles.ul}>
       
       <div style={styles.menu}>
         <li><Link to="/Ingresar">Login</Link></li>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/alta">Registro</Link></li>
         <li style={styles.services}>
           <a href="/">Services</a>
         </li>
         
        <li><a href="/">Contact</a></li>
        </div>
    </ul>
   </nav>
   </div>              
    )
}
export default Menu
