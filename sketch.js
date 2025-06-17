var img01;


var xJogador1=800;
var xJogador2=600;
var xJogador3=0;
var xJogador4=620;









function setup() {
  createCanvas(800, 600);
  img01= loadImage('cidade-campo-_PRINCIPAL-768x569.jpg')
}

function draw() {
  background(img01);
   textSize(60);
  
  text("🚗", xJogador1,270);  
 xJogador1  -= random(1);
  
   text("🛩️", xJogador3,380);  
   xJogador3  += random(1);
   
    
  text("🚜", xJogador2,585);  
 xJogador2  -= random(1);
  
  
  textSize(40);
 text("👨🏾‍🌾", xJogador4,560);  
 xJogador4  -= random(1);
  
  
  
  
  
}
  
  

  
  
  
  
  
  
  
  
  
  
  