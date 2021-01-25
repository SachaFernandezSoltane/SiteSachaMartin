
int x, y;
int o=0;
 int z=0;
int case1, case2, case3, case4, case5, case6, case7, case8, case9; // case pour les ronds
int case11, case12, case13, case14, case15, case16, case17, case18, case19;//case pour les croix
boolean m=false;


void choix(){
    if (x<300 && y>300 && y<350 && (mousePressed && mouseButton==LEFT)) { //si l'utilisateur clique sur la fenêtre
    z=z+1;
    m=true;
  }
  switch(z){
  case 0:  //s'exécute tant que l'utilisateur n'a pas cliqué sur la fenêtre
  background(0);
  noFill();
  strokeWeight(3);
  stroke(255, 0, 255);
  rectMode(CENTER);
  rect(150, 325, 300, 49);
  textSize(30);
  text("JOUER", 100, 330);
  break;
    case 1: // s'éxécute lorsque l'utilisateur clique sur la fenêtre
    background(0);
    noFill();
  strokeWeight(3);
  stroke(255, 0, 255);
  rectMode(CENTER);
  rect(150, 325, 300, 49);
    ecran_jeux(); //sous programme qui affiche un cadrillage
    break;
}}


void victoire() { //si un joueur gagne
  strokeWeight(3);
  stroke(255, 255, 0);//jaune
  fill(0);
  rectMode(CENTER);
  rect(150, 325, 300, 50);
  fill(255);
  textSize(30);
  text("Victoire", 100, 330);
  m=false;
}
void rond(int a, int b) { //dessine un rond à l'endroit indiquer par un joueur
  noFill();
  strokeWeight(5);
  stroke(255, 0, 0);
  ellipse(a, b, 50, 50);
}
void fin() { //Si personne ne remporte la victoire

  strokeWeight(3);
  stroke(255,255,0 );
  fill(0);
  rectMode(CENTER);
  rect(150, 325, 300, 50);
  fill(255);
  textSize(30);
  text("Egalité!", 100, 330);
}

void croix(int a, int b) { //dessine une croix à l'endroit indiqué par un joueur
  noFill();
  strokeWeight(5);
  stroke(0, 255, 255);
  line((a-25), (b-25), (a+25), (b+25));
  line((a+25), (b-25), (a-25), (b+25));
}

void ecran_jeux() {

  stroke(255);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(0, 100, 300, 100);
  line(0, 200, 300, 200);
}
void menu() { 
  fill(0);
  rectMode(CENTER);
  rect(150, 325, 300, 49);
}
void setup() {
  size(300, 350);
  
}

 
  

void draw() {
  x=mouseX;
  y=mouseY;  
 choix(); //Fait changer "m" de valeur si l'utilisateur clique sur la fenêtre

  if (m==true) {



    if (mousePressed &&  mouseButton==LEFT) { //si l'utilisateur clique du côté gauche de la souris

      if (x<100 && y<100 && case11==0) {

        rond(50, 50);
        case1=1;
        o=o+1;
      }
      if (x<100 && y>100 && y<200 && case12==0) {

        rond(50, 150);
        case2=1;
        o=o+1;
      }
      if (x<100 && y>200 && y<300 && case13==0) {

        rond(50, 250);
        case3=1;
        o=o+1;
      }
      if (x<200 && x>100 && y<100 && case14==0) {

        rond(150, 50);
        case4=1;
        o=o+1;
      }
      if (x<300 && x>200 && y<100 && case17==0) {

        rond(250, 50);
        case7=1;
        o=o+1;
      }
      if (x<200 && x>100 && y<200 && y>100 && case15==0) {

        rond(150, 150);
        case5=1;
        o=o+1;
      }
      if (x<300 && x>200 && y<200 && y>100 && case18==0) {

        rond(250, 150);
        case8=1;
        o=o+1;
      }
      if (x<200 && x>100 && y<300 && y>200 && case16==0) {

        rond(150, 250);
        case6=1;
        o=o+1;
      }
      if (x<300 && x>200 && y<300 && y>200 && case19==0) {

        rond(250, 250);
        case9=1;
        o=o+1;
      }
      if (case1==case2 && case1==case3 && case1==1) {
        victoire();
      } else if (case4==case5 && case4==case6 && case4==1) {
        victoire();
      } else if (case7==case8 && case7==case9 && case7==1) {
        victoire();
      } else if (case1==case4 && case1==case7 && case1==1) {
        victoire();
      } else if (case2==case5 && case2==case8 && case2==1) {
        victoire();
      } else if (case3==case6 && case3==case9 && case3==1) {
        victoire();
      } else if (case1==case5 && case1==case9 && case1==1) {
        victoire();
      } else if (case3==case5 && case3==case7 && case3==1) {
        victoire();
      }
    } else if (mousePressed && mouseButton==RIGHT) { // si l'utilisateur clique sur le côté droit de la souris

      if (x<100 && y<100 && case11==0) {

        croix(50, 50);
        case11=2;
        o=o+1;
      }
      if (x<100 && y>100 && y<200 && case2==0) {

        croix(50, 150);
        case12=2;
        o=o+1;
      }
      if (x<100 && y>200 && y<300 && case3==0) {

        croix(50, 250);
        case13=2;
        o=o+1;
      }
      if (x<200 && x>100 && y<100 && case4==0) {

        croix(150, 50);
        case14=2;
        o=o+1;
      }
      if (x<300 && x>200 && y<100 && case7==0) {

        croix(250, 50);
        case17=2;
        o=o+1;
      }
      if (x<200 && x>100 && y<200 && y>100 && case5==0) {

        croix(150, 150);
        case15=2;
        o=o+1;
      }
      if (x<300 && x>200 && y<200 && y>100 && case8==0) {

        croix(250, 150);
        case18=2;
        o=o+1;
      }
      if (x<200 && x>100 && y<300 && y>200 && case6==0) {

        croix(150, 250);
        case16=2;
        o=o+1;
      }
      if (x<300 && x>200 && y<300 && y>200 && case9==0) {

        croix(250, 250);
        case19=2;
        o=o+1;
      }
      if (case11==case12 && case11==case13 && case11==2) {

        victoire();
      } else if (case14==case15 && case14==case16 && case14==2) {

        victoire();
      } else if (case17==case18 && case17==case19 && case17==2) {

        victoire();
      } else if (case11==case14 && case11==case17 && case11==2) {

        victoire();
      } else if (case12==case15 && case12==case18 && case12==2) {

        victoire();
      } else if (case13==case16 && case13==case19 && case13==2) {

        victoire();
      } else if (case11==case15 && case11==case19 && case11==2) {

        victoire();
      } else if (case13==case15 && case13==case17 && case13==2) {

        victoire();
      }
    }
    int c=(case1+case2+case3+case4+case5+case5+case6+case7+case8+case9+case11+case12+case13+case14+case15+case16+case17+case18+case19); // si toutes las cases sont remplies sans aucun vainqueur
    if (c>13) {
      fin();
      m=false;
    }

    
  }
}


void mousePressed(){
}
