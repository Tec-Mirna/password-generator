

export const generarPassword = (configuracion) => {//configuracion Para tener aceso a  todos los valores
   
    /* Caracteres que puedo utilizar en la contraseña */
    const caracteres = {
		numeros: '0 1 2 3 4 5 6 7 8 9',
		simbolos: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
		mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
		minusculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
	}
    let caracteresFinales = ''; /* Si selecciona numeros, toda la cadena de números se almacen en mi var */
	
    let password = ''; /* Contraseña final */
  
    /* Iterar sobre la configuración con el for, pregunto a cada uno de los elementos
    del estado de la confguración  si tiene el valor verdadero(tomar los caracteres correspondientes y poner en caracteresFinales) o falso*/
    for(let propiedad in configuracion){
        if(configuracion[propiedad] === true){
            caracteresFinales += caracteres[propiedad] + ' '; /* Tome lo que caracteresFinales y atenga y le sume caracteres*/
        }
    }
   caracteresFinales += caracteres.minusculas; /* Incluimos las minúsculas */
   caracteresFinales = caracteresFinales.trim() /* Con .trim eliminamos espacios en blanco */

   caracteresFinales = caracteresFinales.split(' ') /* .split  devuelve la cadena en arreglo*/

   /* Crear según el número que el usuario seleccione */
     for(let i = 0; i < configuracion.numCaracteres; i++){

        //Acceder a un elemento decaracteresFinales al azar
         password += caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)]
     }
     return password;

}

export default generarPassword;