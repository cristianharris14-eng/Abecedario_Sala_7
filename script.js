// Función que devuelve un color aleatorio entre rojo, verde y azul
function colorRandom() {
    let colors = ["red", "green", "blue"];

    // Genera un número aleatorio entre 0 y 2 (0, 1 o 2)
    let posicion = Math.floor(Math.random() * 3);

    return colors[posicion];
}

// Cuando el usuario haga clic sobre el h5,
// se ejecutará la función colorRandom() y cambiará el color del texto.
document.getElementById("presenta").onclick = function () {
    document.getElementById("presenta").style.color = colorRandom();
};