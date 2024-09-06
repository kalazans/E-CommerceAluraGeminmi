
function criarDbBike(){
let bikeDB=[];
for(let i=0;i<6;i++){
    let nome = prompt("nome");
    let material = prompt("material");
    let color = prompt("color");
    let weight = prompt("peso");
    let frameSize = prompt("frame");
    let torque = prompt("torque");
    let chain = prompt("chain");
    let chainType = prompt("tipo corrente");
    let bike = {
        nome:nome,
        material:material,
        coor:color,
        weight:weight,
        frameSize:frameSize,
        torque:torque,
        chain:chain,
        chainType:chainType
    }
    bikeDB.push(bike);
}
localStorage.setItem("bikeDB",JSON.stringify(bikeDB));
}

function addImgKey(bikeArray){
    for(let i=0;i<bikeArray.length;i++){
        bikeArray[i].imagem = "Imagens/Group 4.svg";
    }

}

if(localStorage.getItem("bikeDB")==null){
    criarDbBike();
} else{
    let jsonToObj = JSON.parse(localStorage.getItem("bikeDB"));
    addImgKey(jsonToObj);
    console.log(jsonToObj);
    let cardBike = "";
    for (let i =0;i<jsonToObj.length;i++){
        cardBike += `
        <div class="bike-obj">
          <img class="header" src="${jsonToObj[i].imagem}">
          
          <div class="bike-obj-info">
            <span>Brand: ${jsonToObj[i].nome}</span>
            <span>Material: ${jsonToObj[i].material}</span>
            <span>Color: ${jsonToObj[i].coor}</span>
            <span>Weight: ${jsonToObj[i].weight}</span>
            <span>Frame size: ${jsonToObj[i].frameSize}</span></span>
            <span>Torque: ${jsonToObj[i].torque}</span>
            <span>Chain: Color ${jsonToObj[i].chain}</span>
            <span>Chain Type:  ${jsonToObj[i].chainType}</span>
          </div>
          <button>Shop Now</button>
        </div>
        `
    }
    document.getElementById("cardsDB").innerHTML = cardBike;
}

if(localStorage.getItem("acessoriesDB")==null){
    criaAcessoriesDB();
} else{
    let acessoriesFromDB = JSON.parse(localStorage.getItem("acessoriesDB"));
    console.log(acessoriesFromDB);
    let cardAcessories = "";
    for( let i=0;i<acessoriesFromDB.length;i++){
        cardAcessories += `
        <div class="bike-acessories-obj">
          <img class="header-acessorie" src="${acessoriesFromDB[i].imagem}">
          <div class="acessories-obj-info">
            <span>Nome: ${acessoriesFromDB[i].nome}</span>
            <span>Cor: ${acessoriesFromDB[i].cor}</span>
            <span>Peso: ${acessoriesFromDB[i].peso}</span>
          </div>
          <span style='font-size:40px;'>&#127775;&#127775;&#127775;</span>
          <button>Buy Now</button>
      </div>
      `
    }
    document.getElementById("acessoriesDB-Cards").innerHTML = cardAcessories;

}


function criaAcessoriesDB(){
    let acessoriesDB = [];
    for(let i=0;i<5;i++){
        let nome = prompt("nome acessories");
        let cor= prompt("cor acessorio");
        let peso = prompt("peso acessorio");
        let acessories={
            nome: nome,
            cor:cor,
            peso,peso
        }
        acessoriesDB.push(acessories);
    }
    for(let i=0;i<acessoriesDB.length;i++){
        acessoriesDB[i].imagem = "Imagens/image "+(i+1)+".svg";
    }
    localStorage.setItem("acessoriesDB",JSON.stringify(acessoriesDB));
}
