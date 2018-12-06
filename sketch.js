var bubble = {
    radius: 10
};

var bubble2 = {
    radius: 20,
};

function setup() {
  	createCanvas(windowWidth,windowHeight);
}

function draw() {
  	background(220);
		display();
		noStroke();
}

function display() {
	for (var w = 0; w < windowWidth; w = w + 100){
        for(var h = 0; h < windowHeight; h = h + 100){
        	fill(255-w/5,0,255-h/5);
		ellipse(w,h,bubble.radius,bubble.radius);
    		fill(255-h/5,0,255-w/5);
       		ellipse(w+100,h,bubble2.radius,bubble2.radius);
   
        bubble.radius = bubble.radius + .04;
        bubble2.radius = bubble2.radius - .03

        if (bubble.radius > 20){
            bubble.radius = bubble.radius*-1;
            
        if (bubble2.radius < 10){
            bubble2.radius = bubble2.radius*-1;
  
  	}
	}
}
	}
}
