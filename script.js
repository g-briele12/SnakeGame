function leDoTeclado (evento){


    if (evento.KeyCode === cima){
        sentidoAtual = cima;


   }else if (evento.KeyCode === baixo){
    sentidoAtual = baixo;


   }else if (evento.KeyCode === esquerda){
    sentidoAtual = esquerda;


   }else if (evento.KeyCode === direita){
    sentidoAtual = direita;
  }
}


function deslocarCauda(){


    if (sentidoAtual === direita){
       cauda.unshift([cauda[0][0]+15,cauda[0][1]]);
       cauda.pop();
    }


    if (sentidoAtual === esquerda){
        cauda.unshift([cauda[0][0]-15,cauda[0][1]]);
        cauda.pop();
}


if (sentidoAtual === cima){
    cauda.unshift([cauda[0][0],cauda[0][1]-15]);
    cauda.pop();
}


if (sentidoAtual === baixo){
    cauda.unshift([cauda[0][0]-15,cauda[0][1]+15]);
    cauda.pop();
}

}

function desenhaCauda(cauda, raio) {
    for (var i=0; i <cauda.lenght; i ++){
        
    }
}
