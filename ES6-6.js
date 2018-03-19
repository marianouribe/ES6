//Symbol
var sim1 = Symbol();
var sim2 = Symbol("foo");
var sim3 = Symbol("foo");

console.log(Symbol("foo") === Symbol("foo"));

var sym = Symbol("foo");
console.log(typeof sym);
var symObj = Object(sym);
console.log(typeof symObj);

const foo = Symbol()
const bar = Symbol()
console.log(typeof foo);
console.log(typeof bar);

const foo1 = Symbol("este simbolo es fooooo")
const bar1 = Symbol("este simbolo es bar bar bar")
let obj={};
obj[foo1] = "foo";
obj[bar1] = "bar";
console.log(JSON.stringify(obj)); //{}
console.log(Object.keys(obj)); //[]
console.log(Object.getOwnPropertyNames(obj)); //[]
console.log(Object.getOwnPropertySymbols(obj)); //[ foo, bar ]

const COLOR_RED = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN = Symbol('Green');
const COLOR_BLUE = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');

function complemento (color){
    switch (color){
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_VIOLET;
        case COLOR_GREEN:
            return COLOR_RED;
        case COLOR_BLUE:
            return COLOR_ORANGE;
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            throw new Excenption('Unknown color: ' + color);
    }
}

console.log(complemento(COLOR_RED));
