// let charge;
// let numCharge;
// let noiseWave;
// let eyeCount;
let med;
let deepBlue;
let bgdMed;
// let heart;
// let hOption;
// let finalBGD;
// let amt;


function setup() {
	
  
  createCanvas(windowWidth, windowHeight);
	//print(height);
   background(0);
  numCharge= 1;
  bgdMed = color(150);//242,225,216);//191,52,42);//158,21,14);
  med = new Medication(width/2,200);
	finalBGD = color(220);
	amt=0;

  deepBlue = color(30,35,64);

}

function draw() {

  if(millis()/1000<5.5){
    background(bgdMed);
   med.rotation();
   med.needle();
    med.skinUnchanging();
   med.skinDisplay();
  }
  else if(millis()/1000<9){
    background(bgdMed);
    med.moving();
    med.needle();
    med.skinUnchanging();
    med.skinMove();
    med.skinDisplay();
  }
 else if(millis()/1000<10){
    background(bgdMed);
    med.needle();
    med.skinUnchanging();
    med.skinDisplay();
  }
  else if(millis()/1000<13.5){//<15){
    background(bgdMed);
    med.boost();
    med.needle();
    med.skinChanging();
    med.skinDisplay();
  }
}
let myP51 = new p5(mySketch, 'myCanvas1');