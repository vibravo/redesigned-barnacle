var bubble = {
    radius: 1
};

var bubble2 = {
    radius: 51,
};

function setup() {
  	createCanvas(400,600);
}

function draw() {
  	background(220);
		display();
		noStroke();
}

function display() {
	for (var w = 0; w < windowWidth; w = w + 140){
        for(var h = 0; h < windowHeight; h = h + 130){
        fill(200-w/3,0,200-h/8);
				ellipse(w+20,h+20,bubble.radius,bubble.radius);
    		fill(255-h/2,0,255-w/8);
        ellipse(w+80,h-40,bubble2.radius,bubble2.radius);
   
        bubble.radius = bubble.radius + .03;
        bubble2.radius = bubble2.radius - .03

        if (bubble.radius > 51){
            bubble.radius = bubble.radius*-1;
            
        if (bubble2.radius < 1){
            bubble2.radius = bubble2.radius*-1;
  
  	}
	}
}
	}
}
