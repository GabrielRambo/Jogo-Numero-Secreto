let numJaSorteados = [];// array de lista 
let qtdNum = 100;
let numSec = gerarNumeroAleatorio();
let contador = 1;

function exibirTextoNaTela(tag, texto) //funçoes em java em e em c sao a mesma coisa
{
    let campo=document.querySelector(tag);
    campo.innerHTML=texto;
    //parte desnecessaria porem interessante:
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate : 1.2});// com isso o programa ira falar 
}

function mensagemInicial()
{
exibirTextoNaTela('h1','Game'); // passando o h1 para teg e o Game para texto
exibirTextoNaTela('p','Digite um numero de 1 a 100:'); // tudo em seu respectivo lugar
}

mensagemInicial();

function verificarChute() 
{
    let chute= document.querySelector('input').value;
    if(numSec == chute){
        exibirTextoNaTela('h1','Voce acertou o numero!');
        exibirTextoNaTela('p',`Parabens! Voce acertou na tentantiva numero ${contador}! `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        if(chute > numSec){
            exibirTextoNaTela('p','O numero secreto e menor');
            contador++;
        }
        else{
            exibirTextoNaTela('p', ' *O numero secreto e maior');
            contador++;
        }
        limparCampo();
    }
}

function gerarNumeroAleatorio()
{
  let numSorteado = parseInt(Math.random() *qtdNum +1);
  let quantidadeNumeroLista = numJaSorteados.length;
  if(quantidadeNumeroLista == qtdNum)//se a quantidade de numeros da lista for igual a quantidade de numeros possiveis 
  {
  numJaSorteados = [];// zera a lista
  }
  if(numJaSorteados.includes(numSorteado))// esta comparando o numero sorteado com alista de numJaSorteados 
  {
    return gerarNumeroAleatorio();// se ja estiver na lista ele gera o numero novamente
  }
  else
  {
    numJaSorteados.push(numSorteado);// armazena o numero sorteado na lista
    return numSorteado;//retorna o numero sortado
  }

}

function limparCampo()
{
chute = document.querySelector('input');
chute.value = '';
}

function reiniciarJogo()
{
    numSec=gerarNumeroAleatorio(); // aciona o botao de jogar novamente
    limparCampo();
    contador =1; // zera o contador
    mensagemInicial(); //volta a mensagem inicial
    document.getElementById("reiniciar").setAttribute("disabled",true);//desabilita o botao jogar novamente
}
