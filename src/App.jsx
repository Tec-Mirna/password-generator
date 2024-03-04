
import './App.css'
import styled from 'styled-components'
import { Increment } from './components/selec-valor/Increment';
import { Decrement } from './components/selec-valor/Decrement';
import { Checkbtn } from './components/Checkbtn';
import { BotonGenerar } from './components/BotonGenerar';
import { useState, useEffect } from 'react';
import { generarPassword } from './js/generarPassword';


function App() {

  const [configuracion, setConfiguracion] = useState({
      numCaracteres: 8,
      simbolos: true,
      numeros: true,
      mayusculas: true
  });

  const [passwordGenerada, setPasswordGenerada] = useState('');

  useEffect(() => { //Al recargar genera una contraseña
    setPasswordGenerada( generarPassword(configuracion));
  }, [configuracion])
 
    //Función para incrementar
    const incrementarNumero = () => {
      setConfiguracion((configuracionAnterior) => {
          const nuevaConfiguracion = {...configuracionAnterior}
          nuevaConfiguracion.numCaracteres += 1; /* Incremento en 1 */
  
        return nuevaConfiguracion;/* Devolver el nuevo valor */
      })
    }   
     

   //Función para decrementar caracteres
   const disminuirNumero = () => {
    if(configuracion.numCaracteres > 1){
       /* Si es mayor a 1, ejecuta este código (Evita seleccionar un número negativo) */
      setConfiguracion((configuracionAnterior) => {
          const nuevaConfiguracion = {...configuracionAnterior}
          nuevaConfiguracion.numCaracteres -= 1; /* Incremento en 1 */
  
        return nuevaConfiguracion;/* Devolver el nuevo valor */
      })
    }
  } 
  /* Simbolos */
  const  toggleSimbolos = () => {
    setConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = {...configuracionAnterior} /* Objeto duplicado */
        nuevaConfiguracion.simbolos = !nuevaConfiguracion.simbolos;
    return nuevaConfiguracion;/* Devolver el nuevo valor */
    })
  }
  const  toggleNumeros = () => {
    setConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = {...configuracionAnterior} /* Objeto duplicado */
        nuevaConfiguracion.numeros = !nuevaConfiguracion.numeros;
    return nuevaConfiguracion;/* Devolver el nuevo valor */
    })
  }
  const  toggleMayusculas = () => {
    setConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = {...configuracionAnterior} /* Objeto duplicado */
        nuevaConfiguracion.mayusculas = !nuevaConfiguracion.mayusculas;
    return nuevaConfiguracion;/* Devolver el nuevo valor */
    })
  }

  const onSubmit = (e) => {
      e.preventDefault();

      /*La nueva pass generada será la que se genera con la función */
      setPasswordGenerada( generarPassword(configuracion));//Viene del estado de toda la configuración
  }

  return (
    <>
     <div className='contenedor'>
   <h1>Password generator</h1>

{/* Cuando presiono un botón no se recarga */}
     <form onSubmit={onSubmit}>
          <div className='filas'>
            <label>Número de caracteres</label>
            <div className='botones-cont'>
                   <Decrement click={disminuirNumero}/>
               <span>{configuracion.numCaracteres}</span> {/* Contador */}
                 <Increment click={incrementarNumero}/>
            </div>
          </div>
          <div className='filas'>
              <label>¿Incluir símbolos?</label>
               <Checkbtn seleccionado={configuracion.simbolos} click={toggleSimbolos} />
          </div>
          <div className='filas'>
              <label>¿Incluir Números?</label>
               <Checkbtn seleccionado={configuracion.numeros} click={toggleNumeros} />
          </div>
          <div className='filas'>
              <label>¿Incluir Mayúsculas?</label>
               <Checkbtn seleccionado = {configuracion.mayusculas} click={toggleMayusculas}/>
          </div>
          <div className='filas'>
               <BotonGenerar/>                          {/*value SE muestra el password en el input */}
               <Input type="text" readOnly={true} value={passwordGenerada}/>
          </div>

     </form>

     </div>
    </>
  )
}

export default App

const Input =  styled.input`
      width: 100%;
      background: none;
      border-radius: 4px;
      border: 1px solid rgba(255,255,255, .25); /* .25 de opacidad */
      color: #fff;
      height: 40px;
      line-heigth: 40px;
      cursor:pointer;

      &:hover {
        border: 1px solid rgba(255,255,255, .70);
      }   
`;