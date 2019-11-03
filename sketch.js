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
}
