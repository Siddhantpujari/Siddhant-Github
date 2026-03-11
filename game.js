let game = document.getElementById("game");

for(let i=0;i<100;i++){

let block = document.createElement("div");
block.className="block";

block.onclick=function(){

if(block.style.background=="green"){
block.style.background="#444";
}else{
block.style.background="green";
}

}

game.appendChild(block);

}
