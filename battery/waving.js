class waving{

	constructor(){
		this.yoff = 0.0;// 2nd dimension of perlin noise
		this.xnoiseMin = width*6/11;
		this.xnoiseMax = width*10/11;
		this.ynoiseMin = height/2-200;
		this.ynoiseMax = height/2+150;
		this.ymap = this.ynoiseMax+400;
	}

  	display(){
  		//refering to the noise wave example
  		//https://p5js.org/examples/math-noise-wave.html
		fill(255);
			noStroke();

		// I'm drawing a polygon out of the wave points
		beginShape();

		let xoff = 0; // first dimension of perlin noise

		for (let x = this.xnoiseMin; x <= this.xnoiseMax; x += 10) { //make the shape iterate horizontally over the designated width
			let perlinNoise = noise(xoff,this.yoff); //set the noise values
		  let y = map(perlinNoise, 0, 1, this.ynoiseMin, this.ymap); //decalre a y value, calculate its value by mapping the noise value to the limit(on the y-axis) of the wave, it also determines the position of the wave

		  vertex(x, y); //set the vertex of the wave
		    
		  xoff += 0.04;// Increment x dimension for noise
		}
		  
		this.yoff += 0.005;// increment y dimension for noise
		vertex(this.xnoiseMax, this.ynoiseMax);//make the shape fill the right corner of the canvas
		vertex(this.xnoiseMin, this.ynoiseMax);//make the shape fill the left corner of the canvas
		endShape(CLOSE); //make it a closed shape
	}

	variation(){
		if(this.ymap>this.ynoiseMin){
		if(frameCount%2==0){
		this.ymap -=2.4;
		}
		}
	}
}