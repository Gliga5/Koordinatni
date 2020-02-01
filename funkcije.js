class KoordinatniSistem {
    constructor(mjerna){
        this.funkcijaV = [];
        this.tata = -1;
        this.mjerna = mjerna;
        this.duzinaX = width;
        this.duzinaY = height;
        this.govno1 = [];
        this.govno2 = [];
        this.fx = [];
        this.fy = [];
        this.fX = [];
        this.fY = [];
        this.x = [];
        this.y = [];
        this.X = [];
        this.Y = [];
        this.brojac = 0;
        this.fbrojac = 0;
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
        let texts = 0;
        while (i < this.duzinaX/2+1){
            line(this.duzinaX/2 - this.mjerna/i-i,305,this.duzinaX/2 - this.mjerna/i-i,295);
            text(-texts,this.duzinaX/2-this.mjerna/i-i, this.duzinaY/2+22);

            line(this.duzinaX/2 + this.mjerna/i+i,305,this.duzinaX/2 + this.mjerna/i+i,295);
            text(texts,this.duzinaX/2+this.mjerna/i+i, this.duzinaY/2+22);

            line(305,300-this.mjerna/i-i,295,300-this.mjerna/i-i);
            text(texts,this.duzinaY/2-20,this.duzinaX/2-this.mjerna/i-i+1);

            line(305,300+this.mjerna/i+i,295,300+this.mjerna/i+i);
            text(-texts, this.duzinaY/2-20, this.duzinaX/2+this.mjerna/i+i+2);
            if (this.mjerna < 20) {
              if (this.mjerna < 10) {
                i += this.mjerna*4;
                texts += 4;
              }else {
                i += this.mjerna*2;
                texts += 2;
              }
            }else {
              i += this.mjerna;
              texts++;
            }
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
    mojText(x,y,bool=false){
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
        if (bool) {
          text(`(${x},${y})`,this.fX[this.fbrojac]+ix,this.fY[this.fbrojac]-iy);
        }else {
          text(`${this.ime[this.brojac]}(${x},${y})`,this.X[this.brojac]+ix,this.Y[this.brojac]-iy);
        }
    }
    zoom() {
      var range = document.getElementById("myRange");
      var abc = range.value
      this.mjerna = parseFloat(abc);
      this.govno1 = (this.x).length
      this.govno2 = (this.fx).length
      this.brojac = 0;
      this.fbrojac = 0;
      for(let i = 0; i < this.govno1; i++) {
        this.tacka(this.x[i],this.y[i]);
        if (this.tata == 1) {
          if (document.getElementById("id3").value == "1") {
            ks.povezi(true);
          }else {
            ks.povezi(false);
          }
        }
      }
      for(let z = 0; z < this.govno2; z++) {
        this.tacka(this.fx[z],this.fy[z],true);
      }
      for(let s = 0; s < (this.fX).length; s+=2){
        strokeWeight(1.7);
        line(this.fX[s],this.fY[s],this.fX[s+1],this.fY[s+1]);
      }
    }
    tackaunos(){
      let XX = parseFloat(document.getElementById("id1").value);
      let YY = parseFloat(document.getElementById("id2").value);
      this.tacka(XX,YY);
    }
    tacka(x=0,y=0,funkcija=false){
        fill(0);
        textSize(13);
        textStyle(BOLD);
        textAlign(CENTER,CENTER);
        strokeWeight(2);
        if (funkcija) {
          this.fx[this.fbrojac] = x;
          this.fy[this.fbrojac] = y;
          this.fX[this.fbrojac] = x*this.mjerna+300;
          this.fY[this.fbrojac] = y*-this.mjerna+300;
          circle(this.fX[this.fbrojac],this.fY[this.fbrojac],1.5);
          this.mojText(x,y,true)
          this.fbrojac += 1;
        }else {
          this.x[this.brojac] = x;
          this.y[this.brojac] = y;
          this.X[this.brojac] = x*this.mjerna+300;
          this.Y[this.brojac] = y*-this.mjerna+300;
          circle(this.X[this.brojac],this.Y[this.brojac],1);
          this.mojText(x,y)
          strokeWeight(0.4);
          line(300+x*this.mjerna,height/2,x*this.mjerna+300,y*-this.mjerna+300);
          line(300,300-y*this.mjerna,x*this.mjerna+300,y*-this.mjerna+300);
          this.brojac += 1;
        }
        document.getElementById("gg").innerHTML = ` ${this.ime[this.brojac]} (`
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
    omojbozeunos() {
      this.omojboze(document.getElementById("id4").value,true);
    }
    omojboze(formula,bool) {
      let multi = "";
      let add = "";
      for (var i = 0; i < formula.length; i++) {
        if (formula[i] == "x") {
          for (var z = 0; z < i; z++) {
            multi += formula[z]
          }
          for (var s = i+1; s < formula.length; s++) {
            add += formula[s]
          }
        }
      }
      if (multi == "") {
        multi = 1;
      }
      if (add == "") {
        add = "0";
      }else if (add == "+" || add == "-") {
        add = "0";
      }
      this.tacka(-70,((parseFloat(multi)) * -70) + parseFloat(add),true);
      this.tacka(70,((parseFloat(multi)) * 70) + parseFloat(add),true);
      if (bool) {
        this.tacka(0,parseFloat(add),true);
        this.tacka(-(parseFloat(add)/(parseFloat(multi))),0,true);
      }
    }
}
