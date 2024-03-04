import './main.css'

export const Decrement = ({click}) => {
  
    return(
    <>
    {/* En onClick ejecutamos la función click */}
           <button className='btn-select-valor' onClick={click}>
               <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"  viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
               </svg>
            </button>
    </>
    )
}
