const naruto = {
    nome:"Naruto",
    imagem:"img/naruto.png",
    atributos:{
        ataque:7,
        defesa:6,
        magia:2
    }

};
const batman = {
    nome:"Batman",
    imagem:"img/batman.jpg",
    atributos:{
        ataque:6,
        defesa:8,
        magia:0
    }

};
const caitlyn ={
    nome:"Caitlyn",
    imagem:"img/Caitlyn.jpg",
    atributos:{
        ataque:7,
        defesa:5,
        magia:1
    }
};
const bulba = {
    nome:"Bulba",
    imagem: "img/bulba.png",
    atributos:{
        ataque: 7,
        defesas: 5,
        magia: 0
    }
};

const harry = {
    nome:"Harry",
    imagem:"img/harry.jpg",
    atributos:{
        ataque:7,
        defesa:6,
        magia:3
    }
}

const jaspion = {
    nome:"Jaspion",
    imagem:"img/jaspion.jpg",
    atributos:{
        ataque:9,
        defesa:8,
        magia:4
    }
}

const pantera= {
    nome:"Pantera Cor de Rosa",
    imagem:"img/pantera.jpg",
    atributos:{
        ataque:3,
        defesa:6,
        magia:3
    }
}

const jiraya = {
    nome:"Jiraya",
    imagem:"img/jiraya.png",
    atributos:{
        ataque:9,
        defesa:8,
        magia:5
    }
}
const seya= {
    nome:"Seya",
    imagem:"img/seya.jpg",
    atributos:{
        ataque:8,
        defesa:6,
        magia:6
    }
}

const darthvader = {
    nome: "Darthvader",
    imagem:"img/darthvader.jpg",
    atributos:{
        ataque:5,
        defesa:4,
        magia:4
    }
}

const aranha = {
    nome:"Homem aranha",
    imagem:"img/aranha.webp",
    atributos:{
        ataque:7,
        defesa:6,
        magia:1
    }
}

const cartas = [naruto , batman , caitlyn ,bulba , harry,jaspion, pantera,jiraya,seya,darthvader,aranha];
let cartaJogador, cartaMaquina;

function SortearCarta(){
    const numeroDeCartas = cartas.length;
    let numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    let numeroCartaMaquina = parseInt(Math.random()*numeroDeCartas);
    while (numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    }

    cartaJogador = cartas[numeroCartaJogador];
    cartaMaquina = cartas[numeroCartaMaquina];
    ExibirCartaJogador();

}

function ExibirCartaJogador(){

let divCartaJogador = document.querySelector("#carta-jogador");
divCartaJogador.style.backgroundImage =`url(${cartaJogador.imagem})`;
document.querySelector(".nome-personagem-jogador").innerText = cartaJogador.nome;

let listaDeAtributosDaCarta = document.querySelector(".atributos-jogador");
listaDeAtributosDaCarta.innerHTML = PegarAtributos(cartaJogador.atributos);

}

function ExibirCartaMaquina(){
    let divCartaMaquina = document.querySelector("#carta-maquina");
    divCartaMaquina.style.backgroundImage =`url(${cartaMaquina.imagem})`;
    document.querySelector(".nome-personagem-maquina").innerText = cartaMaquina.nome;
    
    let listaDeAtributosDaCarta = document.querySelector(".atributos-maquina");
    listaDeAtributosDaCarta.innerHTML = PegarAtributosMaquina(cartaMaquina.atributos); 
}

function PegarAtributosMaquina(atributosDaCarta){
    let listaDeAtributos = "";
    for(let atributo in atributosDaCarta){
        listaDeAtributos +=`<li>${atributo} : ${atributosDaCarta[atributo]}</li>`;
    }

    return listaDeAtributos;

}

function PegarAtributos(atributosDaCarta){
    let listaDeAtributos = "",botaoRadio = "";
    for(let atributo in atributosDaCarta){
        botaoRadio = `<input type="radio" name="atributo" value="${atributo}">`;
        listaDeAtributos += `<li>${atributo} : ${atributosDaCarta[atributo]} ${botaoRadio}</li>`;  
    }

    return listaDeAtributos;
}



const btnSortear = document.querySelector("#btnSortear");
btnSortear.onclick = () =>{
    SortearCarta();
    ExibirCartaJogador();
    
    document.querySelector("#btnJogar").disabled= false;

};

const btnJogar = document.querySelector("#btnJogar");
btnJogar.onclick = () => {
    ExibirCartaMaquina();
    let atributoJogador = document.querySelector("input[name='atributo']:checked").value;
    let atributoMaquina = cartaMaquina.atributos[atributosEscolhido];

    if (atributoJogador == atributoMaquina){
        document.querySelector("#resultado").innerHTML = "<h1>EMPATE</h1>";

    }else if(atributoJogador > atributoMaquina){
        document.querySelector("#resultado").innerHTML = "<h1>JOGADOR VENCEU!</h1>";

    }else if(atributoJogador < atributoMaquina){
        document.querySelector("#resultado").innerHTML = "<H1>MÁQUINA VENCEU!</h1>";

    }

};