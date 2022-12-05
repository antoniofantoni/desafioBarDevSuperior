const valorCerveja = 5;
const valorRefrigerante = 3;
const valorEspetinho = 7;
var couvertArtistico = 4;
const ingressoM = 10;
const ingressoF=8; 


function calculaConsumoNoBar(){

    let sexo = (document.getElementById("sexoDoCliente").value);
    let qtdeDeCervejas = parseInt(document.getElementById("qtdeDeCervejas").value);
    let qtdeDeRefrigerantes = parseInt(document.getElementById("qtdeDeRefrigerantes").value);
    let qtdeDeEspetinhos = parseInt(document.getElementById("qtdeDeEspetinhos").value);

    document.getElementById("sexo").innerHTML =  `Sexo: ${sexo}`
    document.getElementById("cerveja").innerHTML =  `Quantidade de cervejas: ${qtdeDeCervejas}`
    document.getElementById("refri").innerHTML =  `Quantidade de Refrigerantes: ${qtdeDeRefrigerantes}`
    document.getElementById("espetos").innerHTML =  `Quantidade de espetinhos: ${qtdeDeEspetinhos}`

    
    if(sexo==="M") {
        
            
    let consumo = (valorCerveja * qtdeDeCervejas) + (valorRefrigerante * qtdeDeRefrigerantes) + (qtdeDeEspetinhos * valorEspetinho)



    document.getElementById("relatorio").innerHTML =  "RELATÓRIO:"
    document.getElementById("consumo").innerHTML =  `Consumo: R$ ${consumo.toFixed(2)}`

    if (consumo >30) {
        
        let valorDaConta = (valorCerveja * qtdeDeCervejas) + (valorRefrigerante * qtdeDeRefrigerantes) + (qtdeDeEspetinhos * valorEspetinho) + ingressoM
        document.getElementById("couvert").innerHTML =  "Isento de couvert"
        document.getElementById("ingresso").innerHTML =  `ingresso: R$ ${ingressoM.toFixed(2)}`
        document.getElementById("conta").innerHTML =  `Valor a pagar: R$ ${valorDaConta.toFixed(2)}`  
    }else {
        
        let valorDaConta = (valorCerveja * qtdeDeCervejas) + (valorRefrigerante * qtdeDeRefrigerantes) + (qtdeDeEspetinhos * valorEspetinho) + ingressoM + couvertArtistico

        document.getElementById("couvert").innerHTML =  `Couvert = R$ ${couvertArtistico.toFixed(2)}`
        document.getElementById("ingresso").innerHTML =  `ingresso: R$ ${ingressoM.toFixed(2)}`
        document.getElementById("conta").innerHTML =  `Valor a pagar: R$ ${valorDaConta.toFixed(2)}` 
    }
    
    }else { //F - else do if se é do sexo Masculino

        let consumo = (valorCerveja * qtdeDeCervejas) + (valorRefrigerante * qtdeDeRefrigerantes) + (qtdeDeEspetinhos * valorEspetinho)

    document.getElementById("relatorio").innerHTML =  "RELATÓRIO:"
    document.getElementById("consumo").innerHTML =  `Consumo: R$ ${consumo.toFixed(2)}`

    if (consumo >30) {
        
        let valorDaConta = (valorCerveja * qtdeDeCervejas) + (valorRefrigerante * qtdeDeRefrigerantes) + (qtdeDeEspetinhos * valorEspetinho) + ingressoF
        document.getElementById("couvert").innerHTML =  "Isento de couvert"
        document.getElementById("ingresso").innerHTML =  `ingresso: R$ ${ingressoF.toFixed(2)}`
        document.getElementById("conta").innerHTML =  `Valor a pagar: R$ ${valorDaConta.toFixed(2)}`  
    }else {
        
        let valorDaConta = (valorCerveja * qtdeDeCervejas) + (valorRefrigerante * qtdeDeRefrigerantes) + (qtdeDeEspetinhos * valorEspetinho) + ingressoF + couvertArtistico

        document.getElementById("couvert").innerHTML =  `Couvert = R$ ${couvertArtistico.toFixed(2)}`
        document.getElementById("ingresso").innerHTML =  `ingresso: R$ ${ingressoF.toFixed(2)}`
        document.getElementById("conta").innerHTML =  `Valor a pagar: R$ ${valorDaConta.toFixed(2)}`
    }
    }
}





