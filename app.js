let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um Número de 1 a 10');
}
 exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
   
        if(chute == numeroSecreto) {
            exibirTextoNaTela('h1', `Parabéns! Você acertou, o número secreto é ${numeroSecreto}`);
            let palavraTentativas = tentativas > 1? 'Tentativas' : 'Tentativa';
            let mensagemTentativas = `Você descobriu o Número Secreto com ${tentativas} ${palavraTentativas}`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if(chute > numeroSecreto) {
                exibirTextoNaTela('p', `O número Secreto não é ${chute} Tente um Número menor`);
            } else {
                exibirTextoNaTela('p', `O número Secreto não é ${chute} Tente um Número maior`);
            }
            tentativas++;
            limparCampo();
        }
        
    }

    

function gerarNumeroAleatorio() {
   
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados= [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);;
}