
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
                
                function validarJogada(){
                    let tab_01 = document.getElementById('tab-01');
                    let tab_02 = document.getElementById('tab-02');
                    let tab_03 = document.getElementById('tab-03');
                    let tab_04 = document.getElementById('tab-04');
                    let tab_05 = document.getElementById('tab-05');
                    let tab_06 = document.getElementById('tab-06');
                    let tab_07 = document.getElementById('tab-07');
                    let tab_08 = document.getElementById('tab-08');
                    let tab_09 = document.getElementById('tab-09');
                    let array = [tab_01, tab_02, tab_03, tab_04, tab_05, tab_06, tab_07, tab_08, tab_09];

                    return array;
                }
                validarJogada();

                function vencedor_01(el1,el2,el3){
                    if(el1.children[0].className ==  "circulo" && el2.children[0].className =="circulo" && el3.children[0].classList =="circulo"){
                        alert("Ganhou!!!");
                    }
                }

                vencedor_01(validarJogada()[0], validarJogada()[1], validarJogada()[2]);
                vencedor_01(validarJogada()[0], validarJogada()[4], validarJogada()[8]);
            });
        }

    }

}


let jogo = new Game('Helio','João');

jogo.Jogada();

