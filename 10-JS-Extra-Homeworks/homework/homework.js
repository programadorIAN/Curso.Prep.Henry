// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 /*  return objeto.map(function(el){
				return [el, objeto[el] ];		
							}	)
 */
 return Object.entries(objeto);
 }


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  // o = Object();
  cuenta=Array(255);
  for(i=65;i<123;i++) cuenta[i]=0;

  for(i=0;i<string.length;i++)	  cuenta[ string.charCodeAt(i) ]++;
  
//return cuenta;
  /*  string.forEach( function(el, indice) {
			 o[ charCodeAt(indice)  ] ++;
			}	)
 */
 
	ANS=Object();
	for(i=65;i<123;i++) if( cuenta[i] ) ANS[String.fromCharCode(i)]=cuenta[i];
	
	 return ANS;
	
	
}
 
 

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  S=s.toUpperCase();
  Upper=Lower='';
  for(i=0;i<s.length;i++)  s[i]==S[i] ? Upper+=s[i]: Lower+=s[i];
  
	return Upper+Lower;
}


function reverse(el){
	frase ='';
	for(i=el.length-1;i>=0;i--) frase += el[i];
	return frase;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  str=str.split(' ');
  
  return str.map( function(el){return reverse(el);} ).join(' ');
  

}					


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  n = String(numero)
  return n == reverse(n)? 'Es capicua': 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  elimina = 'abc'
  cadena=cadena.split('')
  cadena=cadena.map( function(el){ return el=='a' || el =='b' || el == 'c' ? '': el; })
  cadena=cadena.reduce( function(ac, el){ return ac+el; }, '');
  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  
  return arr.sort( (a,b) => a.length-b.length )
  /* l = arr.map( function( el ){ return el.length }) */
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  intersection = Array();
  for(i=0;i<arreglo1.length;i++) 
	  for(j=0;j<arreglo2.length;j++) 
		  if( arreglo1[i] == arreglo2[j] ) 
				intersection.push( arreglo1[i] )
			
   return intersection
	  
  }




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

