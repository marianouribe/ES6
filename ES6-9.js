//Desctructuring

let foo2 = ['uno','dos','tres'];
let[one, two, three] = foo2;
console.log(one);
console.log(two);

let modulo = {
    cuadrado(lon){console.log(lon*lon);},
    circulo(radio){console.log(radio*Math.PI);},
    texto(text){console.log(text);},
};

let {cuadrado,texto,circulo} = modulo;

cuadrado(5);
texto('hola');
circulo(10);

let mariano = {nombre: 'Mariano', paterno: 'Uribe'};
let marlon = {nombre: 'Marlon', paterno: 'Uribe', materno:'Brito'};
function nombreCompleto({nombre,paterno,materno = 'N/A'}){
    console.log(`Hola ${nombre} ${paterno} ${materno}`);
}

nombreCompleto(mariano);
nombreCompleto(marlon);