function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

//      Diferente (!=)   E (&&)
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado');
    }
}

// função "play()" é usada para reproduzir o audio.
const ListaDeTeclas = document.querySelectorAll(".tecla");

/*
a função "querySelectorAll" é usada para selecionar todos os elementos da nossa página HTML que estiverem a mesma classa ou id.

document.querySelector('.tecla_pom').onclick = tocaSomPom;

a finção "querySelector" é usada para selecionar apenas um elemento da nossa página HTML. A referência "document" é usada para referenciar o documento HTML dentro do JavaScript.

"onclick" é o atributo de clicar em algo e executar uma função (essa função não precisar ser escrita com ()).
*/

// 1° maneira de fazer o código funcionar:

/*let contador = 0;

while (contador < ListaDeTeclas.length) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom (idAudio);
    }

    contador = contador + 1;
}*/

/* O WHILE (enquanto) é uma estrutura de REPETIÇÃO que foi necessária para trabalhar com a lista de teclas. Esta estrutura possibilita que uma variável de contador tenha seu valor incrementado a cada repetição, e que pode ser utilizado para acessar os indices de uma lista além de ser comparado com o tamanho de lista, formando a condição para a repetição cessar. */

//2° Maneira:

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom (idAudio);
    }

    tecla.onkeydown = function (evento) {
        //                         ou
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

// Usamos a estrutura de repetição FOR, para percorrer uma lista de forma mais otimizada, onde em sua declaração criamos a variável contadora da repetição, a condição de interrupção das repetições e a condição de incrementação da variável contadora (++).

