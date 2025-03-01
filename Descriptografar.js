var botaoDescriptografa = document.getElementById("button#botao__descriptografar");
var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");

function descriptografaTexto() {
  let text = entradaTexto.value;
  if (/[A-Z-À-Ú-à-ù]/.test(text)) {
    saidaTexto.innerHTML = 'Apenas letras minúsculas e sem acentos.'
  } else if (/[0-9]/.test(text)) {
    saidaTexto.innerHTML = 'Apenas letras minúsculas e sem acentos.'
  } else if (entradaTexto.value === '') {
    saidaTexto.innerHTML = 'Digite algo para descriptografar.'
  } else {
    var txt = text.replace(/enter/g, "e");
    var txt = txt.replace(/imes/g, "i");
    var txt = txt.replace(/ai/g, "a");
    var txt = txt.replace(/ober/g, "o");
    var txt = txt.replace(/ufat/g, "u");

    saidaTexto.innerHTML = `${txt}`;
  }
}