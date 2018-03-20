var l10nEN = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"});
var l10nDO = new Intl.NumberFormat("es-DO", {style:"currency", currency:"DOP"});

console.log(l10nEN.format(100200300.40));
console.log(l10nDO.format(100200300.40));
