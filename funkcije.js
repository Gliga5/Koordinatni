class KoordinatniSistem {
    constructor(mjerna){
        this.funkcijaV = [];
        this.tata = -1;
        this.mama = -1;
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
        this.presjekx = [];
        this.presjeky = [];
        this.presjekX = [];
        this.presjekY = [];
        this.countforgood = 0;
        this.brojac = 0;
        this.fbrojac = 0;
        this.presjekbrojac = 0;
        this.px = []
    	this.py = []
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
    mojText(x,y,bool=false,bool2=false){
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
        	if (bool2){
        		text(`(${Math.trunc(x*100)/100},${Math.trunc(y*100)/100})`,this.presjekX[this.presjekbrojac]+ix,this.presjekY[this.presjekbrojac]-iy);
        	}else{
				text(`(${Math.trunc(x*100)/100},${Math.trunc(y*100)/100})`,this.fX[this.fbrojac]+ix,this.fY[this.fbrojac]-iy);
        	}
        }else {
          text(`${this.ime[this.brojac]}(${Math.trunc(x*100)/100},${Math.trunc(y*100)/100})`,this.X[this.brojac]+ix,this.Y[this.brojac]-iy);
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
      this.presjekbrojac = 0;
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
      if (this.mama == 1) {
	      for(let l = 0; l < (this.presjekx).length; l++){
	        this.tacka(this.presjekx[l],this.presjeky[l],true,true);
	      }
      }
    }
    tackaunos(){
      let XX = parseFloat(document.getElementById("id1").value);
      let YY = parseFloat(document.getElementById("id2").value);
      this.tacka(XX,YY);
    }
    tacka(x=0,y=0,funkcija=false,presjek=false){
        fill(0);
        textSize(13);
        textStyle(BOLD);
        textAlign(CENTER,CENTER);
        strokeWeight(2);
        if (funkcija) {
        	if (presjek){
				this.presjekx[this.presjekbrojac] = x;
	          	this.presjeky[this.presjekbrojac] = y;
	          	this.presjekX[this.presjekbrojac] = x*this.mjerna+300;
	          	this.presjekY[this.presjekbrojac] = y*-this.mjerna+300;
	          	circle(this.presjekX[this.presjekbrojac],this.presjekY[this.presjekbrojac],1.5);
	          	this.mojText(x,y,true,true)
	          	this.presjekbrojac += 1;
        	}else{
          		this.fx[this.fbrojac] = x;
	          	this.fy[this.fbrojac] = y;
	          	this.fX[this.fbrojac] = x*this.mjerna+300;
	          	this.fY[this.fbrojac] = y*-this.mjerna+300;
	          	circle(this.fX[this.fbrojac],this.fY[this.fbrojac],1.5);
	          	this.mojText(x,y,true)
	          	this.fbrojac += 1;
        	}
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
            if ((this.X).length > 2) {
            	this.mojdist(this.X[this.govno1-1],this.Y[this.govno1-1],this.X[0],this.Y[0])
            }
        }
        for(let i = 0; i < (this.X).length-1; i++){
            line(this.X[i],this.Y[i],this.X[i+1],this.Y[i+1]);
      		this.mojdist(this.X[i],this.Y[i],this.X[i+1],this.Y[i+1])
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
    mojdist(x1,y1,x2,y2){
    	let d = round(dist(x1 / this.mjerna, y1 / this.mjerna, x2 / this.mjerna, y2 / this.mjerna) * 100) / 100;
    	push();
  		translate((x1 + x2) / 2, (y1 + y2) / 2);
  		rotate(atan2(y2 - y1, x2 - x1));
  		text(d, 0, -5);
  		pop();
    }
    majkomoja(x1,x2,x3,x4,y1,y2,y3,y4){
    	let uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
		let uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
		if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
    		console.log(true);
    		let intersectionX = x1 + (uA * (x2-x1));
			let intersectionY = y1 + (uA * (y2-y1));
			let govno3 = this.presjekbrojac
			let permisija = 0
			for (var i = 0; i < govno3;i++) {
				if (intersectionX == this.presjekx[i] && intersectionY == this.presjeky[i]){
					permisija++
				}
			}
			if (permisija == 0){
				this.tacka(intersectionX,intersectionY,true,true)
			}
		}else{
			console.log(false);
		}
    }
    presjekunos(){
    	this.mama *= -1;
    	if (document.getElementById("id5").checked != true) {
    		this.presjek()
    	}
    }
    presjek(){
    	this.px = []
    	this.py = []
    	let z = 0
	   	for (var i = 0; i < this.fx.length; i+=4){
	    	this.px[z] = this.fx[i]
	    	this.py[z] = this.fy[i]
	   		z++
	    	this.px[z] = this.fx[i+1]
	    	this.py[z] = this.fy[i+1]
	    	z++
	    }
	    for (var i = 0; i < this.px.length; i+=2){
	    	for (var b = 1; b < this.px.length; b+=2){
	    		if (b > i) {
					this.majkomoja(this.px[i],this.px[i+1],this.px[b+1],this.px[b+2],this.py[i],this.py[i+1],this.py[b+1],this.py[b+2])
	    		}
	    	}
	    }
    }
}
