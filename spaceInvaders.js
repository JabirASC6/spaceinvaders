//variables
let userPosX = 200
let userPosY = 435 
let userSpeed = 5
// let enemyY = 150
let y = 20
let intialx = 40;
let intialy = 40
let spaceship;

//enemies
// let enemyArray = [160, 200, 240, 280, 320]

//bullet time
let userbulletX = userPosX + userSpeed;
let userbulletY = userPosY;

let userTop, userLeft, userRight;
// let enemyBottom, enemyRight, enemyLeft;
let bulletTop;


function setup(){
    createCanvas(500,500)
    background(0)
   spaceship = loadImage("spaceship.png")
}

    //characters 
function draw(){
    background(0)
    fill(255)
    rect(spaceship, userPosX, userPosY, 50, 50)

    //userbullet
    
    // rect(enemyPosX1, enemyPosY1, 25, 25)
    
    //movement
    if (keyIsDown(LEFT_ARROW)){
        userPosX -= userSpeed
        userbulletX -= userSpeed
    } 
    if (keyIsDown(RIGHT_ARROW)){
        userPosX += userSpeed
        userbulletX += userSpeed
    }
    
    if(userPosX > 450 ){
        userPosX = 450
    }
    if(userPosX < 0){
        userPosX = 0
    }
    //defining user hit box
   userLeft = userPosX - 200
   userRight = userPosX + 200
   userTop = userPosY - 435
    //for (let i = 0; i )
    
    
    if (keyIsDown(UP_ARROW)){
        fill(255)
        
            rect(userbulletX,userbulletY,5,15)
            userbulletY -= 3
        
        text("Reset")
        
    }
    
}

// fucntion mouseClicked(){

// }


