obj = {
    suma(a, b) {return a+b},
    multiplica (x,y) {return x*y},
    *num(x,y){}
}

console.log(obj.suma(10,3));
console.log(obj.multiplica(10,3));

let obj1 = {
    foo3: "bar",
    ["id" + num()]:4
}
console.log(obj1);

function num(){
    return Math.floor(Math.random()*10);
}

var o1 = {a:1};
var o2 = {b:2};
var o3 = {c:3};

var obj2 = Object.assign(o1,o2,o3);
console.log(obj2);
console.log(o1);

var u1 = {a:1, b:1, c:1};
var u2 = {b:2, c:2};
var u3 = {c:3};

var obj3 = Object.assign({},o1,o2,o3);
console.log(obj3); // {a: 1, b: 2, c: 3}

