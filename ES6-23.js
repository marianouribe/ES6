var str = "Mariano Uribe\nMarlon Uribe";
var regex = /(\S+) Uribe\n?/y;

var match = regex.exec(str);
console.log(match);
console.log(regex.lastIndex);

var match2 = regex.exec(str);
console.log(match2);
console.log(regex.lastIndex);

var match3= regex.exec(str);
console.log(match3);