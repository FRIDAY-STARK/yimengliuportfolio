class Medication{
  constructor(x_,y_){
    this.xypo = createVector(x_,y_)
    this.position = createVector(x_, y_);
    this.liquid = color(94,242,242);//color(75,191,191); //color(255,90,89); //color(4,217,196);
    this.angle = 0.0;
    this.sizePlug = createVector(25,110);
    this.sizeLiquid = createVector(25,90);
    this.changeLiquid = createVector(0,-0.6);
    // this.changePlug = createVector(0,-0.06);
    this.changePosition = createVector(0.463,0.463*tan(radians(130-90)));
    this.move = createVector(1,1/1000*height);
    this.amt = 0;
    this.skinY = height;
    this.skinYmo = 1.3/720*height;
    
    //darker than 31,24,192
    this.kleinBlue =  color(19,19,158);//31,24,192);//color(81,150,166);//grayishBlue 
    this.skin = color(0,0,0);
    this.bgd = bgdMed;
    this.to = color(242,225,216);
  }
  
  needle(){
    rectMode(CORNER);
    let r =radians(this.angle);
    //the static body
    push();
    scale(1);
    translate(this.xypo.x,this.xypo.y);
    rotate(r);
     noStroke();
    fill(this.liquid);
    rect(-7.5,70,this.sizeLiquid.x,this.sizeLiquid.y);
    stroke(0);
    strokeWeight(3);
    noFill();
    line(0,0,0,50); //needle
    rect(-2.5,50,5,20); //the rect under needle
    rect(-7.5,70,25,100); // the cylinder
    
    pop();
    
    //the changing part
    push();
    translate(this.position.x, this.position.y);
    rotate(r);
    fill(0);
    rect(-7.5,+160,25,10); // the rubber plug
    noFill();
    stroke(0);
    strokeWeight(3);
   rect(-7.5,+180,this.sizePlug.x,this.sizePlug.y);//the body of the plug
    rect(-10,+180+this.sizePlug.y, 5+this.sizePlug.x, 10); //the bottom of the plug
    
    pop();
    
    //scales on the cylinder
    push();
    translate(this.xypo.x,this.xypo.y);
    rotate(r);
    stroke(0);
    strokeWeight(3);
    for(let i=1; i<7; i+=1){
    line(-7.5,+70+100/7*i,-2.5,+70+100/7*i);
    }
    fill(bgdMed);
    rect(-22.5,+170,55,10);//the bottom of the cylinder
    pop();
  }
  
  rotation(){
    if (this.angle<130){
     this.angle+=0.5;
     }
  }
  
  moving(){
        //rotate(radians(this.angle));
        this.xypo.add(this.move);
        this.position.add(this.move);
  }
    
  boost(){
    if(this.sizeLiquid.y>0){
    this.sizeLiquid.add(this.changeLiquid);
      this.sizePlug.add(this.changePlug);
      this.position.add(this.changePosition);
      
    }
  }
  
  skinDisplay(){
    rectMode(CORNER);
    noStroke();
    fill(this.skin);
    rect(0,this.skinY,width,height*1.5/3);
  }
  
  skinMove(){
    
    if(this.skinY>height*1.5/3){
    this.skinY -= this.skinYmo;
    }
  }
  
  skinUnchanging(){
    this.skin = this.kleinBlue;
  }
  
  skinChanging(){
    if(this.amt<1){
      this.amt+=0.006;
    }
    bgdMed = lerpColor(this.bgd, this.to,this.amt)
    this.skin = lerpColor(this.kleinBlue, this.liquid, this.amt);
    
  }
    
  
  
  
}