var bgImg;
var canvas;
var cat, catImg1,catImg2,catImg3;
var mouse, mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //precargar imagenes con la ruta de ubicación del archivo  con la siguiente sintaxis
    bgImg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/tomOne.png");
    catImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    catImg3= loadAnimation("images/tomFour.png");
    mouseImg1=loadAnimation("images/jerryOne.png");
    mouseImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mouseImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);
    //crea a quí los sprites de tom y Jerry
    

    cat = createSprite(870, 600);
    cat.addAnimation("tomSleeping", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("jerryStanding", mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bgImg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("tomLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("tomRunning", catImg2);
        cat.changeAnimation("tomRunning");
        
        mouse.addAnimation("jerryTeasing", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("jerryTeasing");
    }
}