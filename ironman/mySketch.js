let cover=[];
let ironman =[];

let x1,y1,x2,y2;
let covers;

let step;
let startX;
let sw,swSpeed,swAcceleration;

let rex,rey;
let option;

let yloc = 0;
let speed1=-5;
let bgd=2;

let index;


//let change2;



function preload(){
  for (let i =0; i<30; i++){ 
    cover[i] = loadImage('https://FRIDAY-STARK.github.io/portfolio-p5-images/cover' +(i+1)+'.jpg');
}
	for(let i=0;i<5;i++){
		ironman[i] = loadImage('https://FRIDAY-STARK.github.io/portfolio-p5-images/ironman'+(i+1)+'.png');
	}
}

function setup(){
  createCanvas(400, 400);
	
  background(0);
	x1=-1;
	y1=0;
	x2=-150;
	y2=0;
	sw=1;
	swSpeed = 1;
	swAcceleration=0.05;
	
	covers = new covering(8);
	
	frameRate(20);
	
	rex = 0;
	rey = 0;
	ironman[4].loadPixels();
	
	ironman[2].loadPixels();
	step=10;
	startX=width;
	// pixelDensity(1);
	
	index=0;
}

function draw(){
	if(frameCount<300){
	background(0);
	push();
	translate(0,yloc);
	covers.bg();
	pop();
	covers.colorChange();
	covers.shapeChange();
	covers.line();
	yloc+=speed1;
	}
	
	
		else if(frameCount<300+180){
		blip(sw,1);
			//sw+=swSpeed;
			//swSpeed+=swAcceleration;
		// if(frameCount%10<5){
	startX-=5;
		// }
	}
	else if(frameCount<300+181){
		startX = width;
	}
	else if(frameCount<300+361){
		blip(sw+swSpeed,1);
			//sw+=swSpeed;
			//swSpeed+=swAcceleration;
		// if(frameCount%10<5){
	startX-=5;
		// }
	}
	else if(frameCount<300+362){
		startX = width;
	}
	else if(frameCount<300+542){
		blip((sw+swSpeed)*2,1);
			//sw+=swSpeed;
			//swSpeed+=swAcceleration;
		// if(frameCount%10<5){
	startX-=5;
		// }
	}
	else if(frameCount<300+543){
		startX = width;
	}
	else if(frameCount<300+723){
		blip((sw+swSpeed)*3,1);
			//sw+=swSpeed;
			//swSpeed+=swAcceleration;
		// if(frameCount%10<5){
	startX-=5;
		// }
	}
	else if(frameCount<300+724){
		startX = width;
	}
		else if(frameCount<300+904){
		blip((sw+swSpeed)*4,1);
			//sw+=swSpeed;
			//swSpeed+=swAcceleration;
		// if(frameCount%10<5){
	startX-=5;
		// }
	}
	else if(frameCount<300+905){
		startX = width;
	}
	
	else if(frameCount<300+1085){
		blip((sw+swSpeed)*5,1);
			//sw+=swSpeed;
			//swSpeed+=swAcceleration;
		// if(frameCount%10<5){
	startX-=5;
		// }
	}
	else if(frameCount<300+1086){
		startX = width;
		sw=5;
		//image(ironman[2],0,0);
	}
	

	else if(frameCount<300+1500){
		blip(sw,0);
		sw+=swAcceleration;
		//swSpeed+=swAcceleration;
		if(frameCount%4==0){
	startX-=10;
		}
	}
		
else if(frameCount>300+1501){
	
	
	if(bgd==1){
		background(0);
		flashBack(floor(random(5,16)));
	}else{
		flashBack(10);
	}
}


}

function blip(sw,boo){
  noStroke();
  fill(255, 5);
  rect(0, 0, width, height);
  for (let x=0; x<width; x+=step) {
    for (let y=0; y<height; y+=step) {
      let loc=(x+y*width)*4;
      let r = ironman[2].pixels[loc];
			let g = ironman[2].pixels[loc + 1];
			let b = ironman[2].pixels[loc + 2];
      
      let xoff=0;
      let yoff=0;
      if (x>startX) {
				
				if(boo==1){
        //let change1=map(x, startX-width, startX, 0, 100);
        xoff=random(-1,1);//*change1; 
        yoff=random(-1,1);//*change1;
				}else{
					let change1=map(x, startX-width, startX, 0, 100);
        xoff=random(-1,1)*change1; 
        yoff=random(-1,1)*change1;
      }
			}
      stroke(r, g, b, 200);
			strokeWeight(sw);
      point(x+xoff, y+yoff);
			}
		}
	
}

function flashBack(step){
	if(frameCount%60==0){
	ironman[4].resize(rex,rey);
	}
	for (let x=0; x<width; x+=step) {
    for (let y=0; y<height; y+=step) {
      let loc=(x+y*width)*4;
      let r = ironman[4].pixels[loc];
			let g = ironman[4].pixels[loc + 1];
			let b = ironman[4].pixels[loc + 2];
      rectMode(CENTER);
			noStroke();
			fill(r,g,b,75);
			let count = round(random(1,3));
			if(count==1){
rect(x,y,step,step);
			}else if(count==2){
				triangle(x-1/2*step,y-1/2*step,x+1/2*step,y-1/2*step,x,y+1/2*step);
			}else if(count==3){
				ellipse(x,y,step,step);
			}
			
		}
	}
	if(rex<width&&rey<height){
	rex+=100;
	rey+=100;
	}
	else if(rex>0&&rey>0){
		rex-=10;
		rey-=10;
	}
	
}

class covering{
	constructor(xnum_){
		this.xnum = xnum_;
		this.ynum = xnum_/16*9;
		this.y1 = height/3*2;
		this.ySCstart = height/3*2+height/3/2;
		this.ySCend = height;

	}
		
		bg(){  
			for(let y=4;y<this.ynum*10;y+=1){
				for(let x=0; x<this.xnum*10;x+=1){
					let i = x+(y*this.xnum);
					if(i>29){
						i = i%29;
					}
					imageMode(CORNER);
					image(cover[i],width/this.xnum*x,height/this.ynum*y,width/this.xnum,height/this.ynum);
				}
			}
		}
	
	colorChange(){
			
		loadPixels(); // loads the pixels of the canvas

	for(let y = 0; y < this.y1; y++){
		for(let x = 0; x < width; x++){
			let pix = (x + (y * width)) * 4;
			let r = pixels[pix];
			let g = pixels[pix + 1];
			let b = pixels[pix + 2];
			let holder;
			pixels[pix] = 255;
			pixels[pix + 1] = g;
			pixels[pix + 2] = r;
			pixels[pix + 3] = b;
		}
	}

	updatePixels();
	}
	
	shapeChange(){
		for(let y = this.ySCend; y >this.ySCstart; y-=10){
		for(let x = 0; x < width; x+=15){
	
			let pix = (x + (y * width)) * 4;

			let r = pixels[pix];
			let g = pixels[pix + 1];
			let b = pixels[pix + 2];
			
			noStroke();
			fill(r,g,b);
			rect(x+random(-10,10),y+random(-10,10),5,40);
			}
		}
	}
	
	line(){
		stroke(0);
			strokeWeight(10);
			line(0,height/3/2,width,height/3/2);
			line(0,height/3*2+height/3/2,width,height/3*2+height/3/2);
	}

}
function mousePressed(){
	if(bgd==1){
		bgd=2;
	}else{
		bgd=1;
	}
}
function keyReleased() {
  if (key == 's' || key == 'S') {
		saveCanvas('SCREENSHOT_'+index, 'png');
		index+=1;
	}
}

let myP5 = new p5(mySketch, 'myCanvas');