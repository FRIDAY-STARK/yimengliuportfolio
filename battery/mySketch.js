let charge;
let numCharge;
let noiseWave;
let eyeCount;
let med;
let deepBlue;
let bgdMed;
let heart;
let hOption;
let finalBGD;
let amt;


function setup() {
	
  
  createCanvas(windowWidth, windowHeight);
	//print(height);
   background(0);
  charge = new battery();
  numCharge= 1;
  noiseWave = new waving();
  eyeCount=0;
  bgdMed = color(150);//242,225,216);//191,52,42);//158,21,14);
  med = new Medication(width/2,200);
	finalBGD = color(220);
	amt=0;

  deepBlue = color(30,35,64);
  // heart = new HeartRate();

}

function draw() {
 
  
  if(millis()/1000<5.8){
     background(0);
    noiseWave.display();
    charge.display();
    charge.blinking();
    if (frameCount%120<60){
      charge.lightning();
    }
  }
    
  else if(millis()/1000<16){
     background(0);
    noiseWave.variation();
    noiseWave.display();
    charge.lightning();
    charge.display();
    charge.charging();
    if (numCharge<8){
      if (frameCount%80<1){
      numCharge+=1;
      }
  }
}
  else if (millis()/1000<18){
     background(0);
    noiseWave.variation();
    noiseWave.display();
    charge.display();
    charge.charging();
  }
}

let myP52 = new p5(mySketch, 'myCanvas2');