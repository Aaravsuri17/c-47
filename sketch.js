var store 
var showPrice = false
var pcPrice = 20000, monitorPrice=10000, keyboardPrice=1000
var money = 0
function preload() {
  bg1 = loadImage("images/bg1.jpg")
  store1 = loadImage("images/store.jpg")
  pc1 = loadImage("images/pc.jpg")
  monitor1 = loadImage("images/monitor.jpg")
  keyboard1 = loadImage("images/keyboard.jpg")
}




function setup() {
  createCanvas(1300,700);
  moneySprite = createSprite(1000,150,70,30)
  store = createSprite(100,600,40,40)
   store.addImage(store1)
   store.scale = 0.1
   pc = createSprite(180,600,40,40)
   monitor = createSprite(250,600,40,40)
   keyboard = createSprite(330,600,40,40)
   pc.addImage(pc1)
   monitor.addImage(monitor1)
   keyboard.addImage(keyboard1)
   pc.scale = 0.03
   monitor.scale = 0.1
   keyboard.scale = 0.2
   pc.visible=false
   monitor.visible=false
   keyboard.visible=false 

   comments = ["good job!","nice"]
}

function draw() {
  background(bg1);  
  text(money,moneySprite.x-20,moneySprite.y+50)
  if(mousePressedOver(store)){
   displayStoreItems()
  }
  if(showPrice===true){
  stroke("black")
  strokeWeight(4)
  text(pcPrice,pc.x-20,pc.y+50)
  text(monitorPrice,monitor.x-20,monitor.y+50)
  text(keyboardPrice,keyboard.x-20,keyboard.y+50)

}
spawncomments()
  drawSprites();
  
}
function spawncomments(){
  if(frameCount%70==0){
    com = createSprite(500,250,10,10)
    r = Math.round(random(1,2))
    com.visible=true
    com.velocityY=-2
    textSize(25)
    if(r==1){
      for(var i = 250;i > 0; i--){
        text(comments[0],com.x,i)
      }
    }
    if(r==2){
      text(comments[1],com.x,com.y)
      }
    }
}
function displayStoreItems(){
  if(pc.visible===true){
    pc.visible=false
    showPrice=false
     }else{
     pc.visible=true
     showPrice=true
     }
     if(monitor.visible===true){
      monitor.visible=false
   
       }else{
       monitor.visible=true
   
       }
       if(keyboard.visible===true){
        keyboard.visible=false
     
         }else{
         keyboard .visible=true
     
         }
      
}