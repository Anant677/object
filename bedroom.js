img = "";
function preload(){
img = loadImage("wooden-double-bed-500x500.png");
}
function setup(){
canvas = createCanvas(400,400);
canvas.center();
}
function draw(){
image(img,0,0,400,400);
fill("red");
text("Bed",10,170);
noFill();
stroke("#001eff");
rect(0, 150, 250, 200, 20);

text("Almirah",225,60);
noFill();
stroke("#001eff");
rect(220, 45, 190, 270, 20);
}
//rect(x,y,width,height,radius);