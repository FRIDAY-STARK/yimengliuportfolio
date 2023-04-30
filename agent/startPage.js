class startPage{
	
	constructor(){
		this.title = 120;
		this.subtitle = 50;
		this.caption = 30;
	}
	
	menu(){
	this.bgd();
	fill(255);
	textFont(fontBold);
	textSize(this.title);
	textAlign(CENTER);
	text('Agent Jellyfish',width/2, height/2-250);
	
	textSize(this.subtitle);
	text('press enter to start your journey',width/2,height/2+250);
		
	textFont(fontReg);
	textSize(this.caption+10);
	text('press i for instructions', width/2, height/2+300);
		
		
	//clear();
	//jellyfish.debug = mouse.pressing();
	jellyfish.ani = 'stationary'; 
	}
	
	instructions(){
		this.bgd();
		fill(255);
		textAlign(CENTER);
		textFont(fontBold);
		textSize(this.title);
		text('Instructions',width/2,height/2-320);
		
		textSize(this.subtitle);
		text('press m to return to the menu',width/2,height-70);
		
		textFont(fontReg);
		textSize(this.caption);
		text("I wouldn't tell you what is going on here.",width/2,height/2-250);
		text('Just press wasd keys to control your movement.', width/2,height/2-200);
		text('Press space when you want to interact with anything or anyone.', width/2,height/2+200);
		text('Press z to zoom in/out.',width/2,height/2+250);
		
		//clear();
		//jellyfish.debug = mouse.pressing();
		jellyfish.ani = 'stationary'; 
		
	}
	
	bgd(){
		let tsize =200;
		for(let i=0; i<width; i+=tsize){
			for(let j=0; j<height; j+=tsize){
			image(texture[3],i,j,tsize,tsize);
			}
		}
		
		
	}
	
}