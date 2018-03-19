function* rango(inicio, fin, incremento){
    while (inicio < fin){
        yield inicio;
        inicio += incremento;
    }
}

for (let i of rango(0,10,2)){
    console.log(i);
}

function* cuadrados(){
    var n = 1;
    while (true){
        var c = n * n;
        n++;
        yield c;
    }
}

var gen = cuadrados();

console.log(gen);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

let fibonacci = {
    *[Symbol.iterator](){
        let pre = 0, cur = 1
        for (;;){
            [ pre, cur ] = [ cur, pre + cur]
            yield cur
        }
    }
}

for (let n of fibonacci){
    if (n > 1000) break
    console.log(n);
}
