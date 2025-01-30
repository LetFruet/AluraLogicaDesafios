let valorFinal = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 0;


function adicionar() {

    //recuperar valores de nome do produto, quantidade e valor 
    let produto = document.getElementById('produto').value;
    //split quebra o texto em duas partes
    let nomeProduto = produto.split('-')[0];   //0 seleciona a parte inicial (o que vem antes do parâmetro)
    let valorUnitario = produto.split('R$')[1]; //1 seleciona a parte final (o que vem depois do parâmetro)      
    let quantidade = document.getElementById('quantidade').value;

    //alert(nomeProduto);
    //alert(quantidade.value);


    //calcular o subtotal por produto (valor * quantidade)
    let subtotal = valorUnitario * quantidade;

    //alert(subtotal);


    //adicionar valor ao carrinho 
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
    </section>`;

    //atualizar valor final

        valorFinal = valorFinal + subtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${valorFinal}`;
    document.getElementById('quantidade').value = 0;

}

function limpar() {
    valorFinal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';

}