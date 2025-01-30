let gamesAlugados = 0;

function contador() {
    console.log(`Total de jogos alugados: ${gamesAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);    //recuperando o game que foi clicado a partir do id dele
    let imagemGame = gameClicado.querySelector('.dashboard__item__img');   //aqui o . serve para identificar uma classe --- div img
    let botaoGame = gameClicado.querySelector('.dashboard__item__button');  //tag a
    let nomeGame = gameClicado.querySelector(`.dashboard__item__name`);  //tag p
    //alert(nomeGame.textContent); //para mostrar o texto contido na variável "nomeGame"

    if (imagemGame.classList.contains('dashboard__item__img--rented')) { //devolve uma lista de classes e verifica se essa lista contém a classe passada como parâmetro
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeGame.textContent}?`)) {
            imagemGame.classList.remove('dashboard__item__img--rented');    //removendo a classe dessa lista (removendo o opaco da img)
            botaoGame.classList.remove('dashboard__item__button--return');  //removendo a classe dessa lista (removendo a cor escura do botão)
            botaoGame.textContent = 'Alugar';
        }
    } else {
        imagemGame.classList.add('dashboard__item__img--rented');    //adicionando a classe dessa lista (adicionando o opaco na img)
        botaoGame.classList.add('dashboard__item__button--return');  //adicionando a classe dessa lista (adicionando a cor escura do botão)

        botaoGame.textContent = 'Devolver';

    }
    
    contador();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    gamesAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contador();
});

    /*diferente do id, uma classe pode ser compartilhada entre várias tags e uma tag pode 
    ter múltiplas classes. O id é único na página e cada elemento tem apenas um id*/
