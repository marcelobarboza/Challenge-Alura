var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");

function limpaCampos() {
    saidaTexto.innerHTML = "";
    entradaTexto.value = "";
}