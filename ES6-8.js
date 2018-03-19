//Sets
var s = new Set();
//agrega 3 elementos, se repite el 1
s.add("cadena1").add("cadena2").add("cadena1");
// El tamaño es 2
console.log(s.size === 2);;
//El conjunto no tiene la cadena hola
console.log(s.has("hola"));

//Maps
var m = new Map();
//Añade la llave "hola" con el valor 42
m.set("hola", 42);
//Añade la llave "a" con el valor 34
m.set("edad", 34);
//obtiene el valor asociado a la llave "a"
console.log(m.get("edad")); //34
console.log(m.get("hola")); //42