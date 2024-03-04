import styled from 'styled-components';

export const BotonGenerar = () => {
    return(
    <>
        <BtnGenerar type='submit'>
           Generar
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"  viewBox="0 0 16 16">
				<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
			</svg>
    </BtnGenerar>
    </>
    )
}

const Boton = styled.button`
width: 90%;
background: #8A5BB6;
color: #fff;

align-items: center; /* Centrar el signo vertical */
justify-content: center; /* Centrar horizontal */


text-align: center;
border: none;
border-radius: 4px;
cursor: pointer;


&:hover {
  background: #4D2573;
}
`
const BtnGenerar = styled(Boton)`
	svg {
		margin-left: 10px;
	}
`;