function setup(){
    createCanvas(600,600);
    noLoop();
    noSmooth();
    rectMode(CENTER);
    ks = new KoordinatniSistem(30);
}
function draw(){
    background(244);
    ks.nacrtaj(true); 
    let input = window.prompt("Koliko tacki");

    for(let i = 1; i <= input; i++){
        let input1 = window.prompt(`Koordinate\nNapisi x${i}`);
        let input2 = window.prompt(`Koordinate\nNapisi y${i}`);

        ks.tacka(input1,input2);
    }
    let input2 = window.prompt("Povezati tacke?\n0 - da, u liniji\n1 - da, sve");
    if (input2 == "0"){
        ks.povezi();
    }else if (input2 == "1"){
        ks.povezi(true);
    }
}