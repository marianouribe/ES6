var num1 = [0, 1, 2];
var num2 = [3, 4, 5];
num1.push(...num2);

for (i=0; i<num1.length; i++){
    document.write(`<p>${num1[i]}</p>`);
}