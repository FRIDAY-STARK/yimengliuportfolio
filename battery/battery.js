
class battery{
	
	constructor(){

      this.x = width/4-10;
      this.y = height/2-50;

	}

	display(){
		rectMode(CENTER);
		stroke(255);
		strokeWeight(5);
		noFill();
		rect(this.x, this.y, 216,50);
		fill(255);
		rect(this.x+108+8,this.y,8,50/3);
	}

	blinking(){
		if (frameCount%120<60){
		fill(255,0,0);
		noStroke();
		rect(this.x-100+12.5,this.y, 20,35);
		}
	}
  
    charging(){
      fill(0,255,0);
      noStroke();
      for (let i=0; i<numCharge; i+=1){
        // if (frameCount%120<60){
    	rect(this.x-100+12.5+i*25,this.y, 20,35);
          // }
      }
    }
    lightning(){
       push();
        translate(this.x,this.y+100);
        scale(0.6);
        fill(255);
        noStroke();
        beginShape(TRIANGLES);
        vertex(0,0);
        vertex(-10,55);
        vertex(-35,55);
        vertex(-20,100);
        vertex(-10,45);
        vertex(15,45);
        endShape();

        pop();
      }

	
}

