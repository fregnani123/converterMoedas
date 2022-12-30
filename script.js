let data = new Date();
console.log(data)
let dataWrite = document.querySelector("#data").innerHTML = data



function converter(){
    let url = "http://economia.awesomeapi.com.br/json/last/USD-BRL";
    let valor = document.querySelector("#valor").value;
    let convertido = document.querySelector("#resposta");
    let cotacao = document.querySelector("#cotacao");

fetch(url).then((res)=>{
    return res.json()
}).then((date)=>{
    let rate = date.USDBRL.bid;
    let resposta = `Valor a converter: US$ ${valor} <br> Resultado da conversão: R$ ${rate * valor}` 
    
    if(valor === ""){
        alert ("Insira um valor valido")
    }

convertido.innerHTML = resposta
}).catch((error)=>{
    console.log(error)
})
}


let cotacao = document.querySelector("#cotacao");

fetch(url).then((res)=>{
    return res.json()
}).then((date)=>{
     let cota = date.USDBRL.bid
     
    cotacao.innerHTML = `1 Dólar americano igual a ${cota}`;
})