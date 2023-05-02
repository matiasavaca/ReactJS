import React,{useState, useEffect} from 'react';

function ContenidoFuncion(){
    const [texto, setTexto]=useState('');


    const[titulo, setTitulo] = useState('Clase React')

    useEffect(
        () => {
            console.log('componentDidMount -- hook equivalente');
        },
        []
    );
        // es un hook de efetos que hace lo que hacia los efectos de vida, recibe 2 parametros el useEffect. una funcion y un array
    useEffect(
        () => {
            console.log('componentDidUpdate -- hook equivalente');
        }, [texto]//array
    );
    useEffect(
        () => {
            console.log('componentDidUpdate -- hook equivalente');
        },
        [titulo]
    );
    useEffect(() => {
        return ()=>{
            console.log('componentWillUnMount -- hook equivalente');
        }
    },[]);

    return(
        <div>
            <h1>Titulo {titulo}</h1>
            <p>Contenido Funcion {texto}</p>
            <button onClick={()=>setTexto('HOLA')}>Agregar hola</button>
            <button onClick={()=>setTexto('')}>Quitar hola</button>
        </div>
    )
}
export default ContenidoFuncion