// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
 /* total = 0;
  for(i=0;i<numeros.length;i++) total += numeros[i];
  
  */
  total = numeros.reduce(function( suma, el ){
						return suma + el; }, 0);
	
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  cb(total);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
 // for(i=0;i<array.length;i++) cb(array[i]);
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
   array.forEach( function(el) {cb(el)} ) ;
 
}

function map(array, cb) {
  // Crea un nuevo array
  //arr = Array();
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  //array.forEach(function(el){ arr.push(cb(el))});
  return array.map(function(el){
					return cb(el);
								});
 // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
 // return array.map( function(el) {cb ( el )});
  //return arr;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a
  resultado = Array()
  for(i=0;i<array.length;i++) 
	  if( array[i][0] == 'a' ) resultado.push( array[i] );

	
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
	return resultado;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
