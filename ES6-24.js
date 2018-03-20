console.log("*".repeat(4*10));

//el punto es que no es tan preciso con los numeros
console.log(0.1+0.2===0.3);
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);

console.log(Math.trunc(42.5));