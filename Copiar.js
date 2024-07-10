var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");

function copiaTexto() {
    let text = entradaTexto.value;
    if (/[A-Z-À-Ú-à-ù]/.test(text)) {
        saidaTexto.innerHTML = 'Apenas letras minúsculas e sem acentos.'
    } else if (entradaTexto.value.length === 0) {
        saidaTexto.innerHTML = "Não foi possível copiar.";
    } else {
        const copyText = saidaTexto.innerHTML;
        navigator.clipboard.writeText(copyText).then(() => {
            saidaTexto.innerHTML = "Texto copiado!";
        });
    }
}