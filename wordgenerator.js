let startingPhrase=["The Most Expensive ", "5 Best ", "Top 10 "];
let hook=["Yachts ", "Crusise Ships ","Boats "];
let ending=["in the World ", "You Can Buy ", "to Charter"];

let randomWordIndex = Math.floor(Math.random()*3);







function randomTitle(){
    // tu se bo zbral nakljucni index med 0 in 2

    let index1= Math.floor(Math.random()*3);
    let index2= Math.floor(Math.random()*3);
    let index3= Math.floor(Math.random()*3);

    return console.log(startingPhrase[index1]+hook[index2]+ending[index3]);
}

randomTitle()
