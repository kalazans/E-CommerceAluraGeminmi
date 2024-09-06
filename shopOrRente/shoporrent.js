let bikesDB=[]
let acessoriesDB=[];
carregarDB();

function carregarDB(){
    bikesDB = JSON.parse(localStorage.getItem('bikeDB'));
    acessoriesDB = JSON.parse(localStorage.getItem("acessoriesDB"));
    console.log(bikesDB);
    console.log(acessoriesDB);
}

function buscarPorTipo(){
    let tipo = document.getElementById("produtos").value;
   

   if(tipo!="bike"){
    let buscaFiltrada = acessoriesDB.filter(x=>x.nome.toLowerCase()==tipo);
    let material = "aço";
    
    
    let cards="";
    for(let i=0;i<buscaFiltrada.length;i++){
      
        
        console.log(buscaFiltrada[i]);
        cards +=`
        <div class="bike-obj">
          <img class="header" src="../${buscaFiltrada[i].imagem}">
          
          <div class="bike-obj-info">
            <span>Type: ${buscaFiltrada[i].nome}</span>
            <span>Cor: ${buscaFiltrada[i].cor}</span>
            <span>material: ${material}</span>
          </div>
          <button onclick="comprar('${buscaFiltrada[i].imagem}','${buscaFiltrada[i].nome}','${buscaFiltrada[i].cor}','${material}')">Shop Now</button>
        </div>
        `
    }
    document.getElementById("container-produtos").innerHTML = cards;  
  
} else{
    addImgKey(bikesDB);
    let cards="";
    for(let i=0;i<bikesDB.length;i++){ 
       
        
        //console.log(bikesDB[i]);//
        cards +=`
        <div class="bike-obj">
          <img class="header" src="../${bikesDB[i].imagem}">
          
          <div class="bike-obj-info">
            <span>Brand: ${bikesDB[i].nome}</span>
            <span>Material: ${bikesDB[i].material}</span>
            <span>Color: ${bikesDB[i].coor}</span>
            <span>Weight: ${bikesDB[i].weight}</span>
            <span>Frame size: ${bikesDB[i].frameSize}</span></span>
            <span>Torque: ${bikesDB[i].torque}</span>
            <span>Chain: Color ${bikesDB[i].chain}</span>
            <span>Chain Type:  ${bikesDB[i].chainType}</span>
          </div>
          <button onclick="comprar('${bikesDB[i].imagem}','${bikesDB[i].nome}','${bikesDB[i].coor}','${bikesDB[i].material}')">Shop Now</button>
        </div>
        `
    }
    document.getElementById("container-produtos").innerHTML = cards;  
   }
    

   }

   function addImgKey(bikeArray){
    for(let i=0;i<bikeArray.length;i++){
        bikeArray[i].imagem = "Imagens/Group 4.svg";
    }

}

function comprar(compraImage,compraNome,compraCor,compraPeso){
    let carrinho = document.getElementById("compras");
    let dadosCompras = `
    <div class="dadosCompra">
    <img src="../${compraImage}">
    <div class="infoCompra">
    <span>${compraNome}</span>
    <span>${compraCor}</span>
    <span>${compraPeso}<span>
    </div>
    </div>
    `
    carrinho.innerHTML += dadosCompras;
    carrinho.style=" border:2px solid #EE3C08";
    carrinho.style=" background-color: #1C1B1B;";

}

function concluirCompra(){
    Swal.fire({
        title: "Obrigado!",
        text: "15% de desconto na sua primeira compra!",
        icon: "success"
      });
    let carrinho = document.getElementById("compras");


     document.getElementById("compras").innerHTML="";
     carrinho.style=" border:none";
    carrinho.style=" background-color:none";


}

function alugar(){
    Swal.fire({
        title: "Obrigdo!",
        text: "10% de desconto por alugar o produto",
        icon: "success"
      });
    let carrinho = document.getElementById("compras");

     document.getElementById("compras").innerHTML="";
     carrinho.style=" border:none";
    carrinho.style=" background-color: none";

}
