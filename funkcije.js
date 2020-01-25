class KoordinatniSistem {
    constructor(mjerna){
        this.tata = -1;
        this.mjerna = mjerna;
        this.duzinaX = width;
        this.duzinaY = height;
        this.govno = [];
        this.x = [];
        this.y = [];
        this.X = [];
        this.Y = [];
        this.brojac = 0;
        this.ime = ["A","B","C","D","E","F","G"
        ,"I","J","K","L","M","N","P","Q","R"
        ,"S","T","U","V","W","X","Y","Z"];
    }
    nacrtaj(bool=true) {
        clear();
        background(244);
        textSize(11);
        textStyle(ITALIC);
        textAlign(CENTER,CENTER);
        fill(0);
        strokeWeight(1);
        line(this.duzinaX/2,this.duzinaX,this.duzinaX/2,0);
        line(0,this.duzinaY/2,this.duzinaY,this.duzinaY/2);
        text("0",307,309);

        let i = 0;
        let texts = 1;
        while (i < this.duzinaX/2){
            line(this.duzinaX/2 - this.mjerna-i,305,this.duzinaX/2 - this.mjerna-i,295);
            text(-texts,this.duzinaX/2-this.mjerna-i, this.duzinaY/2+22);

            line(this.duzinaX/2 + this.mjerna+i,305,this.duzinaX/2 + this.mjerna+i,295);
            text(texts,this.duzinaX/2+this.mjerna+i, this.duzinaY/2+22);

            line(305,300-this.mjerna-i,295,300-this.mjerna-i);
            text(texts,this.duzinaY/2-20,this.duzinaX/2-this.mjerna-i+1);

            line(305,300+this.mjerna+i,295,300+this.mjerna+i);
            text(-texts, this.duzinaY/2-20, this.duzinaX/2+this.mjerna+i+2);

            i += this.mjerna;
            texts++;
        }
        if (bool){
            textSize(16);
            text("x",590,285);
            text("y",320,10);
            text("-x",10,285);
            text("-y",320,590);
            text("I(+,+)",550,35);
            text("II(-,+)",50,35);
            text("III(-,-)",50,600-35);
            text("IV(+,-)",550,600-35);
        }
    }
    mojText(x,y){
        let ix = 0;
        let iy = 0;
        if (x > 0 && y > 0) {
            ix = 15;
            iy = ix;
        }else if (x < 0 && y > 0){
            ix = -10;
            iy = 15;
        }else if (x > 0 && y < 0){
            ix = 10;
            iy = -15;
        }else if (x < 0 && y < 0){
            ix = -15;
            iy = ix;
        }else{
            ix = -20
            iy = 15
        }
        text(`${this.ime[this.brojac]}(${x},${y})`,this.X[this.brojac]+ix,this.Y[this.brojac]-iy);
    }
    zoom() {
      var range = document.getElementById("myRange");
      var abc = range.value
      this.mjerna = parseInt(abc);
      this.govno = (this.x).length
      this.brojac = 0;
      if (this.govno > 0) {
        for(let i = 0; i < this.govno; i++){
          this.tacka(this.x[i],this.y[i]);
          if (this.tata == 1) {
            if (document.getElementById("id3").value == "1") {
              ks.povezi(true);
            }else {
              ks.povezi(false);
            }
          }
        }
      }
      document.getElementById("gg").innerHTML = ` ${this.ime[this.brojac]} (`
    }
    tackaunos() {
      let XX = parseInt(document.getElementById("id1").value);
      let YY = parseInt(document.getElementById("id2").value);
      this.tacka(XX,YY);
    }
    tacka(x,y,bool = true,funkcija=true){
        fill(0);
        textSize(13);
        textStyle(BOLD);
        textAlign(CENTER,CENTER);
        strokeWeight(2);
        this.x[this.brojac] = x;
        this.y[this.brojac] = y;
        this.X[this.brojac] = x*this.mjerna+300;
        this.Y[this.brojac] = y*-this.mjerna+300;
        circle(this.X[this.brojac],this.Y[this.brojac],1);
        if (bool) {
            this.mojText(x,y);
        }
        if (funkcija){
            strokeWeight(0.4);
            line(300+x*this.mjerna,height/2,x*this.mjerna+300,y*-this.mjerna+300);
            line(300,300-y*this.mjerna,x*this.mjerna+300,y*-this.mjerna+300);
        }
        this.brojac += 1;
    }
    krajnjaTacka(){
        strokeWeight(1.7);
        line(this.X[(this.X).length-1],this.Y[(this.X).length-1],this.X[0],this.Y[0])
    }
    povezi(bool = false){
        strokeWeight(1.7);
        if (bool){
            this.krajnjaTacka();
        }
        for(let i = 0; i < (this.X).length-1; i++){
            line(this.X[i],this.Y[i],this.X[i+1],this.Y[i+1]);
        }
    }
}
