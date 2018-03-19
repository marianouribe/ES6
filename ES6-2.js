function cambiaFondo(elemento, color = 'yellow'){
    var cuado = document.getElementById(elemento);
    cuado.style.backgroundColor=color;
}

window.onload = () => {
    // cambiaFondo("cuadro");
    // cambiaFondo("cuadro", undefined);
    cambiaFondo("cuadro","blue");
}