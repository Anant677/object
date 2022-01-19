img = "";
function preload(){
img = loadImage("666c191c19bea8d1a375662a70cbfe53.jpg");
}
function setup(){
canvas = createCanvas(400,400);
canvas.center();
}
function draw(){
image(img,0,0,400,400);
fill("red");
text("tv",90,185);
noFill();
stroke("#001eff");
rect(80, 170, 200, 100, 20);

text("ac",190,60);
noFill();
stroke("#001eff");
rect(130, 45, 150, 100, 20);
}
//rect(x,y,width,height);