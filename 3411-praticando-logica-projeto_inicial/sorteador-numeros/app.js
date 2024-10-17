function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value); 
    let de = parseInt(document.getElementById("de").value); 
    let ate = parseInt(document.getElementById("ate").value); 
    
    alert(`Quantidade de números: ${quantidade}`); 
    alert(`Do número: ${de}`); alert(`Até: ${ate}`);

    let sorteados = [], numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        } 
    }

    let numerosSorteados = document.getElementById("resultado");
    numerosSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`; 
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");

    if (botao) {

    } else {
        
    }
}