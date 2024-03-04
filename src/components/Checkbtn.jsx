import styled from 'styled-components';

export const Checkbtn = ({seleccionado, click}) => {
  if(seleccionado){
    return(  /* Si seleccionado es verdadero mestra el check. */
    <>
     <Boton onClick={click}>
           <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
           </svg>
    </Boton>
    
    </>

    )
  } else{ /* Si es falso se muestra X */
  return (
    <BotonNoSeleccionado onClick={click}>
       <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
</BotonNoSeleccionado>
  );
  }
}

// USO DE STYLED COMPONENTS  biblioteca de JavaScript
/* Variantes  */
const Boton = styled.button`
width: 100%;
background: #8A5BB6;
color: #fff;

align-items: center; /* Centrar el signo vertical */
justify-content: center; /* Centrar horizontal */

border: none;
border-radius: 4px;
cursor: pointer;


&:hover {
  background: #4D2573;
}


`;
/* Toma el botón (Boton) y añade estos nuevos estilos */
const BotonNoSeleccionado =styled(Boton)`
background: #4D2573;

&:hover {
  background: #8A5BB6;
}

`;