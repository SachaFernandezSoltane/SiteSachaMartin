var imagefeuille2=document.getElementById("feuille2");
imagefeuille2.style.visibility="hidden";
var imageciseau2=document.getElementById("ciseau2");
imageciseau2.style.visibility="hidden";
var imagepierre2=document.getElementById("pierre2");
imagepierre2.style.visibility="hidden";
var victoirejoueur=0;
var victoirerobot=0;
var VosPoints=document.getElementById("VosPoints");
var PointsIA=document.getElementById("PointsIA");
function feuille(){
imagepierre2.style.visibility="hidden";
imagefeuille2.style.visibility="hidden";
imageciseau2.style.visibility="hidden";
const joueur="feuille";
//const permet de faire une valeur qui ne peut pas être modifié durant le programme
var robot=Math.floor(Math.random() * 3);
//le robot choisi un nombre aléatoire en 0 et 2
if(robot==0){
//si robot est égale à 0
robot="feuille";
//alors robot a "choisi" de jouer la fueille
}else if(robot==1){
robot="pierre";

}else if(robot==2){
robot="ciseau";

}
if(joueur==robot){
//si le joueur et robot ont joués les mêmes choses
victoirejoueur+=0;
victoirerobot+=0;
imagefeuille2.style.visibility="visible";
//alors aucun point n'est ajouté
}else if(joueur=="feuille" && robot=="pierre"){
//si c'est feuille contre pierre
victoirejoueur+=1;
//alors l'utilisateur gagne un point
victoirerobot+=0;
imagepierre2.style.visibility="visible";
}else if(joueur=="feuille" && robot=="ciseau") {
//dans ce cas de figure , c'est feuille contre ciseau
victoirejoueur+=0;
victoirerobot+=1;
imageciseau2.style.visibility="visible";
//donc le robot gagne un point
}
console.log(joueur);
console.log(robot);
console.log(victoirejoueur);
console.log(victoirerobot);


VosPoints.innerText="Vos points :" + victoirejoueur;
//on affiche les points de l'utilisateur grâce à .innerText
PointsIA.innerText="PointsIA : "+victoirerobot;
score();
//on se dirige ensuite vers la fonction score
}

function pierre(){
imagepierre2.style.visibility="hidden";
imagefeuille2.style.visibility="hidden";
imageciseau2.style.visibility="hidden";
const joueur="pierre";
var robot=Math.floor(Math.random() * 3);

if(robot==0){
robot="feuille";

}else if(robot==1){
robot="pierre";

}else if(robot==2){
robot="ciseau";

}
if(joueur==robot){
victoirejoueur+=0;
victoirerobot+=0;
imagepierre2.style.visibility="visible";
}else if(joueur=="pierre" && robot=="ciseau"){

victoirejoueur+=1;
victoirerobot+=0;
imageciseau2.style.visibility="visible";
}else if(joueur=="pierre" && robot=="feuille") {
victoirejoueur+=0;
victoirerobot+=1;
imagefeuille2.style.visibility="visible";
}
console.log(joueur);
console.log(robot);
console.log(victoirejoueur);
console.log(victoirerobot);

VosPoints.innerText="Vos points :" + victoirejoueur;
PointsIA.innerText="PointsIA : "+victoirerobot;
score();
}
function ciseau(){
imagepierre2.style.visibility="hidden";
imagefeuille2.style.visibility="hidden";
imageciseau2.style.visibility="hidden";
const joueur="ciseau";
var robot=Math.floor(Math.random() * 3);

if(robot==0){
robot="feuille";

}else if(robot==1){
robot="pierre";

}else if(robot==2){
robot="ciseau";

}
if(joueur==robot){
victoirejoueur+=0;
victoirerobot+=0;
imageciseau2.style.visibility="visible";
}else if(joueur=="ciseau" && robot=="feuille"){

victoirejoueur+=1;
victoirerobot+=0;
imagefeuille2.style.visibility="visible";
}else if(joueur=="ciseau" && robot=="pierre") {
victoirejoueur+=0;
victoirerobot+=1;
imagepierre2.style.visibility="visible";
}
console.log(joueur);
console.log(robot);
console.log(victoirejoueur);
console.log(victoirerobot);

VosPoints.innerText="Vos points :" + victoirejoueur;
PointsIA.innerText="PointsIA : "+victoirerobot;
score();
}
function score(){
if(victoirejoueur==3){
alert("victoire");
victoirejoueur=0;
victoirerobot=0;
//on réinitialisé les points
}else if(victoirerobot==3){
alert("défaite");
victoirejoueur=0;
victoirerobot=0;
//on réinitialisé les points
}
}
