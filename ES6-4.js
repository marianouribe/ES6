function llamarAlgo(cosa = algo()){ return cosa; }

function algo(){
    return Math.floor(Math.random()*10);
}

console.log(llamarAlgo());