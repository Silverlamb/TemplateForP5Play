let w = window.innerWidth;
let h = window.innerHeight;

function setup() {
	createCanvas(w, h);
	main = createSprite(w/2, h/2, 60, 60);
}

function draw() {
	background(255, 255, 255);

	drawSprites();
	
	camera.off();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}