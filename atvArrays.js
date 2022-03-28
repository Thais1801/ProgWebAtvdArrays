let numeros = [];

const inputNum = document.getElementById("entrada");
const inserirIn = document.getElementById("inserirIN");
const inserirFI = document.getElementById("inserirFI");
const limpar = document.getElementById("limpar");

function inserirInicio(){
    const num = parseInt(entrada.value);
    if(!isNaN(num)){
        numeros.unshift(num);
        document.getElementById("entrada").value="";
        document.getElementById("entrada").focus();
        console.log(numeros);
    }
    else{
        alert("Digite um valor inteiro válido!")
    }
    gerarLista();
}

function inserirFinal(){
    const num = parseInt(entrada.value);
    if(!isNaN(num)){
        numeros.push(num);
        document.getElementById("entrada").value="";
        document.getElementById("entrada").focus();
        console.log(numeros);
    }
    else{
        alert("Digite um valor inteiro válido!")
        document.getElementById("entrada").value="";
        document.getElementById("entrada").focus();
    }
    gerarLista();
}

function limparTudo(){
    numeros.splice(0, numeros.length);
    document.getElementById("entrada").focus();
    console.log(numeros);
    gerarLista();
}

function removerIndice(){
   const ind = document.getElementById("indice").value;

    if (numeros[ind] !== numeros[null]){
    numeros.splice(ind,1);
    document.getElementById("indice").value="";
    document.getElementById("indice").focus();
    console.log(numeros);
  }
  else{
    alert("Digite um valor de indice válido!");
    document.getElementById("indice").value="";
    document.getElementById("indice").focus();
  }
  gerarLista();
}

function gerarLista(){

    lista = document.getElementById("lista");
    let aLen = numeros.length;
    lista.innerHTML="";
    for (i = 0; i < aLen; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(numeros[i]));
        lista.appendChild(item);
    }    
}
