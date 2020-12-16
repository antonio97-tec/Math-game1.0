var xMenu = 100;
var yMenu = 120;
var largura = 220;
var altura = 45;
var tela= 0;
//VARIAVEIS DO JOGO
var jogolargura = 70 ;
var jogoaltura = 35 ;
var yEscolha = 290;
var num1;
var num2;
var calculo;
var nivel = 1;
var tempo;
var cont1 = 900;
var cont2 = 900;
var cont3 = 900;
var cont4 = 900;
var cont5 = 900;
var rate = 30
let img;
let img2, img3;
var status1 = true;
var status2 = true;

function setup() {
  createCanvas(450, 450);  
  frameRate(rate)
  numeros ()
}

function numeros ()
{
  num1 =parseInt(random(1,10));
  num2 = parseInt(random(1,10));
  calculo = num1 * num2; 
}

function draw() {
   background(300);
  if (tela === 0)
  {
    menu ()
  }
  if ( tela == 1)
  {
    fase1()
  }
  if (tela ==2)
  {
     fase2 ()   
  }
  if (tela == 3)
  {
    fase3 ()
  }
  if (tela == 4)
  {
    fase4 ()
  } 
  if (tela == 5)
  {
    fase5 ()
  }
  if (tela == 6)
  {//vencedor ()
    image (img,15,25);
    vencedor ()
  }
  if (tela == 7)
  {//GAMEOVER
    image (img2,5,25);
    gameover()
  }
  
  if (tela === 8)
  {
    instruçoes ()
  }
  if (tela === 9)
  {
    credito ()
  }
}

function menu ()
{
  background(20);
  fill (240);
  noStroke ()
  textAlign (CENTER)
  textSize (40);
  text ("MATH GAME", 200 , 80)
 
  //TELA DO JOGO
  if ( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu && mouseY < yMenu + altura ) 
  {
    stroke (100);
    fill (100);
    rect ( xMenu , yMenu , largura , altura, 20);  
    if (mouseIsPressed)
    {
      tela = 1;
    }
  }
  //TELA DE INSTRUÇOES
  if ( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu +50 && mouseY < yMenu + altura + 50 ) 
  { 
  if (mouseIsPressed)
  {
    tela = 8;
  }
    stroke (100);
    fill (100);
    rect ( xMenu , yMenu + 50 , largura , altura,20);    
  }
  //TELA DE CREDITOS
  if ( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu +100 && mouseY < yMenu + altura + 100 ) 
  {
    if(mouseIsPressed)
    {
      tela =9;
    }
    stroke (100);
    fill (100);
    rect ( xMenu , yMenu + 100 , largura , altura,20);    
  }
  fill (240)
  noStroke ()
  textAlign (CENTER);
  textSize (26);
  text ( "JOGAR" , 200 ,150);
  text ( "INSTRUÇÕES" , 200,200 );
  text ( "CRÉDITOS" , 200,250);
}

function fase1 ()
{
  background(20);
  
  //OPÇÃO 1
  if (mouseX > 40 && mouseX < 40 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  {
    stroke (100);
    fill (100);
    rect ( 40 , 290 , 70  , 35 , 15);
    if(mouseIsPressed) 
    {
      tela =7;
    }
  }
   //OPÇÃO 2
  if (mouseX > 140 && mouseX < 140 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  {
    stroke (100);
    fill (100);
    rect ( 140 , 290 , 70  , 35 , 15)
    if(mouseIsPressed && status1 == true)
    {
     status1 = false;
     mouseX = 10;
     mouseY = 10;
      fase = 2;
      tela ++;
      nivel ++;
      numeros ()
    }
  }
  //OPÇÃO 3
  if (mouseX > 240 && mouseX < 240 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  {
    stroke (100);
    fill (100);
    rect ( 240 , 290 , 70  , 35 , 15);
    if(mouseIsPressed)
    {
      tela =7;
      mouseX = 20;
      mouseY = 20;
    }
  }
  if ( tempo <= 0 && tela == 1)
  {
    tela = 7;   
  }
  else 
  {
  tempo = parseInt (cont1/rate);
  cont1--;
  }
  
  fill (500);
  noStroke();
  textSize (40);
  text( num1 +'*' + num2, 200 , 50 );
  
  textSize (26);
  text (calculo - 10 , 65 , 320 );
  text (calculo , 165 , 320 );
  text (calculo + 50 , 265 , 320 );
  text ("tempo: " + tempo , 60, 100);
  text ("nivel: " + nivel , 50, 125);

}

//FASE 2
function fase2 ()
{
  background(20);
  
  //OPÇÃO 1
  if (mouseX > 40 && mouseX < 40 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  {
    stroke (100);
    fill (100);
    rect ( 40 , 290 , 70  , 35 , 15);
    if(mouseIsPressed && tela == 2)
    {
      tela ++
      nivel ++
      fase = 3;
      numeros ();
      mouseX = 10;
      mouseY = 10;
    }
  }
   //OPÇÃO 2
  if (mouseX > 140 && mouseX < 140 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  {
    stroke (100);
    fill (100);
    rect ( 140 , 290 , 70  , 35 , 15);
    if(mouseIsPressed && tela == 2)
    {
     
       tela =7;
    }
  }
  //OPÇÃO 3
  if (mouseX > 240 && mouseX < 240 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  {
    stroke (100);
    fill (100);
    rect ( 240 , 290 , 70  , 35 , 15);
    if(mouseIsPressed && tela ==2)
    {
      tela =7;
    }
  }
  if ( tempo <= 0)
  {
    tela = 7;
  }
  else 
  {
  tempo = parseInt(cont2/rate);
  cont2--;
  }
  
  fill (500);
  noStroke();
  textSize (40);
  text( num1 +'*' + num2, 200 , 50 );
  
  textSize (26);
  text (calculo, 65 , 320 );
  text (calculo + 20 , 165 , 320 );
  text (calculo + 50 , 265 , 320 );
  text ("tempo: " + tempo , 60, 100);
  text ("nivel: " + nivel , 50, 125);

}

//FASE3
function fase3 ()
{
  background(20);
  
  //OPÇÃO 1
  if (mouseX > 40 && mouseX < 40 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  {
    stroke (100);
    fill (100);
    rect ( 40 , yEscolha , jogolargura  , jogoaltura , 15);
   if(mouseIsPressed && tela ==3)
   {
      tela =7;
   }
   }
   //OPÇÃO 2
  if (mouseX > 140 && mouseX < 140 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  { 
    stroke (100);
    fill (100);
    rect ( 140 , yEscolha , jogolargura  , jogoaltura , 15);
    if(mouseIsPressed && tela ==3)
    {
      tela =7;
    }
  }
  //OPÇÃO 3
  if (mouseX > 240 && mouseX < 240 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  {
    stroke (100);
    fill (100);
    rect ( 240 , yEscolha , jogolargura  , jogoaltura , 15);
    if(mouseIsPressed && tela ==3)
    {
      fase = 3;
      tela ++;
      nivel ++;
      numeros ();
      mouseX = 10;
      mouseY = 10;
    }
  }
  if ( tempo <= 0)
  {
    tela = 7;
  }
  else 
  {
  tempo = parseInt (cont3/rate);
  cont3--;
  }
  
  fill (500);
  noStroke();
  textSize (40);
  text( num1 +'*' + num2, 200 , 50 );
  
  textSize (26);
  text (calculo - 10 , 65 , 320 );
  text (calculo/2 , 165 , 320 );
  text (calculo , 265 , 320 );
  text ("tempo: " + tempo , 60, 100);
  text ("nivel: " + nivel , 60, 125);

}
//FASE4
function fase4 ()
{
  background(20);
  
  //OPÇÃO 1
  if (mouseX > 40 && mouseX < 40 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  {
    stroke (100);
    fill (100);
    rect ( 40 , yEscolha , jogolargura  , jogoaltura , 15);
    if(mouseIsPressed && tela ==4)
    {
      fase = 4;
      tela ++;
      nivel ++;
      numeros ();
      mouseX = 10;
      mouseY = 10;
    }
  }
   //OPÇÃO 2
  if (mouseX > 140 && mouseX < 140 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  { 
    stroke (100);
    fill (100);
    rect ( 140 , yEscolha , jogolargura  , jogoaltura , 15);
   if(mouseIsPressed && tela ==4) {
      tela =7;
   }
  }
  //OPÇÃO 3
  if (mouseX > 240 && mouseX < 240 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  { 
    stroke (100);
    fill (100);
    rect ( 240 , yEscolha , jogolargura  , jogoaltura , 15);
    if(mouseIsPressed && tela ==4)
   {
      tela =7;
    }
  }
  if ( tempo <= 0)
  {
    tela = 7;
  }
  else 
  {
  tempo = parseInt (cont4/rate);
  cont4--;
  }
  
  fill (500);
  noStroke();
  textSize (40);
  text( num1 +'*' + num2, 160 , 50 );
  
  textSize (26);
  text (calculo  , 65 , 320 );
  text (calculo - 50, 165 , 320 );
  text (calculo + 50 , 265 , 320 );
  text ("tempo: " + tempo , 60, 100);
  text ("nivel: " + nivel , 50, 125);

}

//FASE5
function fase5 ()
{
  background(20);
  
  //OPÇÃO 1
  if (mouseX > 40 && mouseX < 40 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  {
    stroke (100);
    fill (100);
    rect ( 40 , yEscolha , jogolargura  , jogoaltura , 15);
    if(mouseIsPressed && tela ==5)
   {
      tela =7;
   }
  }
   //OPÇÃO 2
  if (mouseX > 140 && mouseX < 140 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  { 
    stroke (100);
    fill (100);
    rect ( 140 , yEscolha , jogolargura  , jogoaltura , 15);
    
    if(mouseIsPressed && tela ==5)
    {
      tela ++;
      mouseX = 10;
      mouseY = 10;
    }
  }
  //OPÇÃO 3
  if (mouseX > 240 && mouseX < 240 + jogolargura && mouseY> yEscolha && mouseY< yEscolha + jogoaltura)
  {
    stroke (100);
    fill (100);
    rect ( 240 , yEscolha , jogolargura  , jogoaltura , 15);
   if(mouseIsPressed && tela ==5)
   {
      tela =7;
   }
  }
  if ( tempo <= 0)
  {
    tela = 7;
  }
  else 
  {
  tempo = parseInt (cont5/rate);
  cont5--;
  }
  fill (500);
  noStroke();
  textSize (40);
  text( num1 +'*' + num2, 200 , 50 );
  
  textSize (26);
  text (calculo - 10 , 65 , 320 );
  text (calculo , 165 , 320 );
  text (calculo*2 , 265 , 320 );
  text ("tempo: " + tempo , 60, 100);
  text ("nivel: " + nivel , 50, 125);

}

//IMAGEM,DO VENCEDOR
function preload ()
{ 
  img = loadImage ('math2.jpg')
  img2 = loadImage('gameover.jpg')
  img3 = loadImage ('math3.jpg')
} 

function vencedor ()
{
  status1 = true;
  if (mouseX > 280 && mouseX < 280 + jogolargura && mouseY> 290 && mouseY< 290 + jogoaltura)
  { 
    stroke (100);
    fill (100);
    rect ( 280 , 290 ,jogolargura, jogoaltura,25)
    if (mouseIsPressed)
    {
    tela = 1;
    nivel = 1;
    cont1 = 900;
    cont2 = 900;
    cont3 = 900;
    cont4 = 900;
    cont5 = 900;
    mouseX= 15;
    mouseY = 15;
    }
  }
  textSize(20)
  fill (20);
  text("ESC" , 315,320)
  
}


function gameover ()
{
  status1 = true;
  if (mouseX > 280 && mouseX < 280 + jogolargura && mouseY> 290 && mouseY< 290 + jogoaltura)
  { 
    stroke (100);
    fill (100);
    rect ( 280 , 290 ,jogolargura, jogoaltura,25)
    if (mouseIsPressed && tela == 7)
    {
    tela = 1;
    nivel = 1;
    cont1 = 900;
    cont2 = 900;
    cont3 = 900;
    cont4 = 900;
    cont5 = 900;
    tempo = parseInt (cont5/rate);
    mouseX = 10;
    mouseY = 10;
    }
  }
  textSize(20)
  fill (20);
  text("ESC" , 315,320)
  
}

function instruçoes ()
{
  fill ( 20)
  textSize (20);
  text ( "Você usará seu conhecimento\n matemático para resolver \n os problemas apresentados.\n Você usará o mouse para\n para escolher a opção correta\n e clicar nela. \nCaso erre voce pode \n tentar novamente",200,50)
  
   if (mouseX > 280 && mouseX < 280 + jogolargura && mouseY> 295 && mouseY< 295 + jogoaltura)
  { 
    stroke (100);
    fill (100);
    rect ( 280 , 295 ,jogolargura, jogoaltura,25)
    if (mouseIsPressed)
    {
    tela = 0;
    }
  }
  textSize(20)
  fill (20);
  text("ESC" , 315,320)
  
}

function credito()
{
  fill(20)
  textSize(20)
  text("Jogo desenvolvido por Antonio Azevedo e\n com ajuda do professor Orivaldo e\n monitores,\n graduando em CeT. Matéria do jogo\n logica de programação no \n no semestres de 2020.6.",200,50)
  
  if (mouseX > 280 && mouseX < 280 + jogolargura && mouseY> 295 && mouseY< 295 + jogoaltura)
  { 
    stroke (100);
    fill (100);
    rect ( 280 , 295 ,jogolargura, jogoaltura,25)
    if (mouseIsPressed)
    {
    tela = 0;
    }
  }
  textSize(20)
  fill (20);
  text("ESC" , 315,320)
}