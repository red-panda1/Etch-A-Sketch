function getLightColor() {
    color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    return color;
  }

const word="Etch-A-Sketch";
const letters=word.split("");
const headerCont=document.querySelector(".headerCont");
for (let i=1; i<=13 ; i++){
    let letterColor=getLightColor();
    const letter=document.createElement("div");
    letter.textContent=letters[i-1];
    letter.style.color=letterColor;
    headerCont.appendChild(letter);
}

let squareNum=100;
let height=6;

const container=document.querySelector(".container");
function createGrid(squareNum,height){
    for (let i=1; i<=squareNum; i++){
        const subcontainer=document.createElement("div");
        subcontainer.classList.add("subcontainer");
        container.appendChild(subcontainer);
        for (let j=1; j<=squareNum; j++){
            let color="#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
            const square=document.createElement("div");
            square.classList.add("square");
            square.style.cssText=`height:${height}px; width:${height}px;`;
            square.addEventListener("mouseover",()=>{
                if (square.style.backgroundColor==false){
                    square.style.backgroundColor=color;
                    square.style.filter= "brightness(1)";
                }
                else {
                    if (square.style.filter== "brightness(1)"){
                        square.style.filter= "brightness(0.9)";
                    }
                    else{
                        for(let i=1; i<=9; i++){
                            if (square.style.filter== `brightness(0.${i})`){
                                square.style.filter=`brightness(0.${i-1})`;
                            }
                        }
                    }
                }
            });
            subcontainer.appendChild(square);
        }
    }   
}

createGrid(squareNum,height);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const button=document.querySelector(".button");
button.addEventListener("click",()=>{
    squareNum=prompt("Type a number between 1 and 100 for the squares per side");
    if (squareNum==null||squareNum==""){
        return;
    }
    while(!(Number.isInteger(Number(squareNum))&&Number(squareNum)>=1&&Number(squareNum)<=100)){
        squareNum=prompt("Number of squares must be an integer between 1 and 100");
        if (squareNum==null||squareNum==""){
            return;
        }
    }
    removeAllChildNodes(container);
    height=600/squareNum;
    createGrid(squareNum,height);
});

