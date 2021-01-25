float x,dx;
float y,dy;
int z=0;
int p=0;
float i=25;// nombre d'image par seconde
int u,v,j=50,k=350;//joueur clavier
//joueur souris
int a=10;//taille ellipse

void setup(){ //fonction qui définit les paramètres d’affichage
size(400,400);
background(0);
x=200; //abscisse initiale de l’ellipse
y=200; //ordonnée initiale de l’ellipse
dx=6;  //fonction qui modifie les coordonnées de l’ellipse : à chaque exécution, x et y augmentent
dy=-3; //de valeurs, induisant un déplacement de l'ellipse vers le bas et la droite

}

void draw(){
textSize(30);
  text("JOUER", 150, 200);

 if  ( mouseButton==LEFT) { //si le joueur appuie sur la fenêtre
   background(0);
   p=p+1;
 }
 
 if(p>0){ // Uniquement si l'utilisateur veut jouer
frameRate(i); //l’image change toutes les i secondes
nettoyer(); // l'ancienne image de l'ellipse s'efface
bouger();   // l'ellipse se déplace
rebondir(); // les coordonnées de l'ellipse s'inverse
dessiner(); 
stroke(255);
strokeWeight(3);
line(200,400,200,0);
noFill();
strokeWeight(5);
rect(j,u,10,70);
rect(k,v,10,70);
 v=mouseY;
 i=i+0.05; // accélération de la balle
 } 
}
void nettoyer(){
  background(0);
}

void rebondir(){
  if(x>width-a && dx>0){
  dx=-dx;
}
if(x<0 && dx<0){
  dx=abs(dx);
}
if(y>width-a && dy>0){
  dy=-dy;
}
if(y<0 && dy<0){
  dy=abs(dy);
}

if(x<j+a && y>u && y<u+70+a){
 dx=-dx; 
}
if(x>k-a && y>v && y<v+70+a){
 dx=-dx;
}
if(x<50){
  noLoop();
  textAlign(LEFT);
  textSize(25);
  text(" VICTOIRE",200,50); 
}
if(x>350){
  noLoop();
  textAlign(RIGHT);
  textSize(25);
  text("VICTOIRE ",200,50);
}
}
void bouger(){
  
  x=x+dx;
  y=y+dy;
}
void dessiner(){
  smooth();
  fill(255);
  ellipse(x,y,a,a);
}
void keyPressed(){ //Fonction qui s'active lors de l'utilisation des flèches du clavier
  if(key==CODED){
    if(keyCode==UP && u>0){
    u=u-70;
  }
    else if(keyCode==DOWN && u<340){
    u=u+70;
    }
  }   
}
void mouseMoved(){//Fonction qui s'activent lors de l'utilisation de la souris
}
