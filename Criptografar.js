var botaoCriptografa = document.querySelector("button#botao__criptografar");
var botaoDescriptografa = document.querySelector("button#botao__descriptografar");
var botaoCopia = document.getElementById("button#botao__copiar");
var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");

function criptografaTexto() {
  let text = entradaTexto.value;
  if (/[A-Z-À-Ú-à-ù]/.test(text)) {
    saidaTexto.innerHTML = 'Apenas letras minúsculas e sem acentos.'
  } else if (/[0-9]/.test(text)) {
    saidaTexto.innerHTML = 'Apenas letras minúsculas e sem acentos.'
  } else if (entradaTexto.value === '') {
    saidaTexto.innerHTML = 'Digite algo para criptografar.'
  } else {
    var txt = text.replace(/e/g, "enter");
    var txt = txt.replace(/i/g, "imes");
    var txt = txt.replace(/a/g, "ai");
    var txt = txt.replace(/o/g, "ober");
    var txt = txt.replace(/u/g, "ufat");

    saidaTexto.innerHTML = `${txt}`;
  }
}