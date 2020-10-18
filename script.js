
let jogadas = 0;

class Jogador{
    constructor(nome, pontos = 2){
        this.nome = nome;
    }
}



class Game{

    constructor(jogador1, jogador2){
        this.jogador1 = new Jogador(jogador1);
        this.jogador2 = new Jogador(jogador2);
    }

    Jogada(){
        
        let elementos = document.getElementsByClassName("tabela");
        
        for(let i=0;i<elementos.length; i++){

            elementos[i].addEventListener("click",function pasarajogada(){
                if(!elementos[i].children[0].classList.contains("circulo", "xis")){
                    if(jogadas%2==0){
                        
                        elementos[i].children[0].classList.add("circulo");
                        jogadas+=1;
                        
                    }else{
                        
                        elementos[i].children[0].innerHTML= "X";
                        elementos[i].children[0].classList.add("xis");
                        jogadas+=1;
                    }
                    
                }
                
            });
            this.verificarVencedor();
        }

    }

    verificarVencedor() {
        let tab_01 = document.getElementById('tab-01');
        let tab_02 = document.getElementById('tab-02');
        let tab_03 = document.getElementById('tab-03');
        let tab_04 = document.getElementById('tab-04');
        let tab_05 = document.getElementById('tab-05');
        let tab_06 = document.getElementById('tab-06');
        let tab_07 = document.getElementById('tab-07');
        let tab_08 = document.getElementById('tab-08');
        let tab_09 = document.getElementById('tab-09');

        
        alert(tab_01.children[0].className);
      

    }
}


let jogo = new Game('Helio','João');

jogo.Jogada();

