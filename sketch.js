let cor;
let circleX;
let circleY;

function setup() {
 createCanvas(400, 400);
 background (100, 0, 0);
 cor = color(random(255), random(255), random(255));
 circleX = [0, 0];
 circleY = [random(height),random(height)];
}

function draw() {
 fill(cor);
 for(let contador in circleX) {
 circle(circleX[contador], circleY[contador], 50);
 circleX[contador] += random(0,3);
 circleY[contador] += random(-3,3);
 if(circleX[contador] >= width){
   circleX[contador] = 0;
   circleY[contador] = random(height);
 }
 
 if(mouseIsPressed) {
   cor = color(random(0, 255),random(0,255), random(0, 255), random(0, 100));
 }
 
}
}