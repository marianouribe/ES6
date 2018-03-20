let miPromesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Toto bien");
    }, 1000);

    setTimeout(() => {
        reject("Toto mal");
    }, 1500);
});

miPromesa.then((res)=>{
    console.log(res);
}, (err) => {
    console.log(err);
});

let miPromesa1 = new Promise((todoBien, todoMal) => {
    let resultado = true;

    if (resultado){
        todoBien("listo");
    }else{
        todoMal("algo fallo");
    }

});

miPromesa1.then((resultado) => {
    console.log("El resultado es " + resultado);
}).catch((resultado) => {
console.log("El resultado es " + resultado);
});

let promesaPrimera = function(){
    return new Promise(function(resolve, reject){
        resolve('Primera promesa');
    });
};

let promesaSegunda = function (msg) {
    return new Promise(function (resolve, reject) {
        resolve(msg+' Segunda promesa');
    });
};

let promesaTercera = function (msg) {
    return new Promise(function (resolve, reject) {
        resolve(msg+' Tercera promesa');
    });
};

promesaPrimera().then(function(resultado){
    return promesaSegunda(resultado);
}).then(function(resultado){
    return promesaTercera(resultado);
}).then(function(resultado){
    console.log('Final ' + resultado);
})


let miPrimeraPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa 1 - Toto bien");
    }, 1000);
})

let miSegundaPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promesa 2 - Toto bien");
    }, 1500);
});

Promise.all([miPrimeraPromesa, miSegundaPromesa])
    .then((data) => {
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    });


let promesaPrimera1 = function () {
    return new Promise(function (resolve, reject) {
        resolve('Primera promesa');
    });
};

let promesaSegunda1 = function () {
    return new Promise(function (resolve, reject) {
        resolve('Segunda promesa');
    });
};

let promesaTercera1 = function () {
    return new Promise(function (resolve, reject) {
        resolve('Tercera promesa');
    });
};

Promise.all([promesaPrimera1(), promesaSegunda1(), promesaTercera1()]).then(
    function(respuestas){
        respuestas.forEach(function(msg){console.log(msg)});
    });