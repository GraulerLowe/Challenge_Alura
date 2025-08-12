// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
//let amigoAgregado = "";

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    let amigoAgregado = document.getElementById('amigo');
    let nombre = amigoAgregado.value.trim();
    if (nombre === ''){
        alert("Por favor, inserte un nombre.");
    } else{ 
        amigos.push(nombre);
        console.log(amigos);
    }
    limpiarCaja();
    listaAmigos();
}

function listaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let sorteo of amigos){
        let li = document.createElement("li");
        li.textContent = sorteo;
      lista.appendChild(li);
    }
}

function sortearAmigo() {
    let participantes = amigos.length;
    if (participantes === 0){
        alert("No hay participantes")
    }
    let numeroGenerado =  Math.floor(Math.random()*participantes);
    let sorteado = amigos[numeroGenerado];

    let secreto = document.getElementById('resultado');
    secreto.innerHTML = "El amigo secreto es:";
    let li = document.createElement("li");
      li.textContent = sorteado;
      secreto.appendChild(li);
}
