function criptografar() {
    let texto = document.getElementById("inputText").value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = textoCriptografado;
    mostrarResultado();
}

function descriptografar() {
    let texto = document.getElementById("inputText").value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = textoDescriptografado;
    mostrarResultado();
}

function copiarTexto() {
    let texto = document.getElementById("outputText");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
    location.reload();
}

function mostrarResultado() {
    document.getElementById("illustration").style.display = "none";
    document.querySelector(".h2").classList.add("visible");
    document.querySelector(".texto").classList.add("visible");
    document.getElementById("outputText").classList.add("visible");
    document.querySelector(".botao3").classList.add("visible");
}
