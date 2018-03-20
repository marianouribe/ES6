//En aleman "ä" se ordena junto a "a"
//en sueco, "ä" se ordena junto a "z"

var lista = ["ä","a","z"];
var l10nDE = new Intl.Collator("de");
var l10nSV = new Intl.Collator("sv");

console.log(l10nDE.compare("ä", "z"));
console.log(l10nSV.compare("ä", "z"));

console.log(lista.sort(l10nDE.compare));
console.log(lista.sort(l10nSV.compare));