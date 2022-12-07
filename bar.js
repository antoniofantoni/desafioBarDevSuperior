let valorCerveja = 5;
let valorRefrigerante = 3;
let valorEspetinho = 7;
let couvertArtistico = 4;
let valorDaConta=0;
let ingresso=0;

function calculaConsumoNoBar(){

    let sexo = (document.getElementById("sexoDoCliente").value);
    let qtdeDeCervejas = parseInt(document.getElementById("qtdeDeCervejas").value);
    let qtdeDeRefrigerantes = parseInt(document.getElementById("qtdeDeRefrigerantes").value);
    let qtdeDeEspetinhos = parseInt(document.getElementById("qtdeDeEspetinhos").value);
    let consumo = (valorCerveja * qtdeDeCervejas) + (valorRefrigerante * qtdeDeRefrigerantes) + (qtdeDeEspetinhos * valorEspetinho)  
   
    document.getElementById("sexo").innerHTML =  `Sexo: ${sexo}`
    document.getElementById("cerveja").innerHTML =  `Quantidade de cervejas: ${qtdeDeCervejas}`
    document.getElementById("refri").innerHTML =  `Quantidade de Refrigerantes: ${qtdeDeRefrigerantes}`
    document.getElementById("espetos").innerHTML =  `Quantidade de espetinhos: ${qtdeDeEspetinhos}`
   
    if (consumo > 30  &&  sexo==="M") {
        ingresso=10
        valorDaConta=consumo+ingresso
        document.getElementById("couvert").innerHTML =  "Isento de couvert"
               
    } else {
        if(consumo <= 30  &&  sexo==="M"){
            ingresso = 10
            valorDaConta=consumo+ingresso+couvertArtistico
            document.getElementById("couvert").innerHTML =  `Couvert = R$ ${couvertArtistico.toFixed(2)}`
        } else {
                if(consumo > 30  &&  sexo==="F") {
                    ingresso=8
                    valorDaConta=consumo+ingresso
                    document.getElementById("couvert").innerHTML =  "Isento de couvert"
                } else {
                    ingresso=8
                    valorDaConta=consumo+ingresso+couvertArtistico 
                    document.getElementById("couvert").innerHTML =  `Couvert = R$ ${couvertArtistico.toFixed(2)}`
            }
        }
    }
    document.getElementById("relatorio").innerHTML =  "RELATÓRIO:"
    document.getElementById("consumo").innerHTML =  `Consumo: R$ ${consumo.toFixed(2)}`
    document.getElementById("ingresso").innerHTML =  `ingresso: R$ ${ingresso.toFixed(2)}`
    document.getElementById("conta").innerHTML =  `Valor a pagar: R$ ${valorDaConta.toFixed(2)}`    
}




