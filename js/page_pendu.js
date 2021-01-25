var image1=document.getElementById("image1");
//var permet d'initialiser une valeur
//défini un variable qui recherche un élément avec un ID image1
image1.style.visibility="hidden";
//rend image1 invisible grâce à hidden
var image2=document.getElementById("image2");
image2.style.visibility="hidden";

var image3=document.getElementById("image3");
image3.style.visibility="hidden";


var image4=document.getElementById("image4");
image4.style.visibility="hidden";

var image5=document.getElementById("image5");
image5.style.visibility="hidden";

var image6=document.getElementById("image6");
image6.style.visibility="hidden";

var image7=document.getElementById("image7");
image7.style.visibility="hidden";

var image8=document.getElementById("image8");
image8.style.visibility="hidden";

var image9=document.getElementById("image9");
image9.style.visibility="hidden";

var réponse=document.getElementById("réponse");
var motchoisi=document.getElementById("mot choisi");
var vie=10;
var longueur="";
var tableau2=[];
var tableau=[];
//on définie un tableau sans définir sa longueur
tableau[0]="sacha";
tableau[1]="porte";
tableau[2]="carotte";
tableau[3]="pomme";
tableau[4]="voiture";
tableau[5]="babiole";
tableau[6]="fromage";
tableau[7]="enfant";
tableau[8]="beaugosse";
tableau[9]="jeux";
tableau[10]="routier";
tableau[11]="orthographe";
tableau[12]="mort";
tableau[13]="chameau";
tableau[14]="maison";


var choix=Math.floor(Math.random() * tableau.length);
//l'ordinateur choisi aléatoirement le mot parmis ceux dans le tableau grâce à Maths random, qui choisit un nombre entre 0 et 1 , multiplié par la longueur du tableau
var MotInconnu=tableau[choix];
//stock le mot choisi dans le tableau
console.log(MotInconnu);


for(let i=0;i<MotInconnu.length;i++){
//on utilise let pour déclarer une variable dont la portée est celle du bloc courant , ici c'est le for , ca aurait pu être un if
//on parcours le mot que l'utilisateur doit trouver
longueur+="_ ";
//à chaque lettre parcouru , un "_" se rajoute
motchoisi.innerText="Voici le mot choisi " + longueur;
//on peut donc afficher autant de "_" qu'il y a de lettre dans le mot
}


function verification(){
//fonction verification pour vérifier si la lettre ou le mot sont corrects
var réussite=0;
var Recupération=document.getElementById("ligne");
var Accès=Recupération.value;
//.value permet d'accéder au contenu
var proposition=Accès;

if(proposition.length>1){
//si l'utilisateur rentre un mot alors il vérifie que c'est le même que le mot choisi par le programme
if(MotInconnu==proposition){
//si l'utilisateur a trouvé le bon mot
alert("victoire");
motchoisi.innerText="Vous avez gagné, le mot était : " + MotInconnu;
//on affiche le mot inconnu en modificiant motchoisi grâce à .innerText
réponse.style.visibility="hidden";
//on cache le bouton permettant de rentrer une réponse
}else{
alert("re-essaye");
}
}else if(proposition.length==1){
//l'utilisateur a rentré une lettre donc il vérifie que la lettre soit dans le mot
for (let b =0; b < MotInconnu.length ; b ++) {
//on parcours le mot choisi par l'ordinateur
  if(MotInconnu.charAt(b)==proposition){
  //si la lettre rentrée par l'utilisateur est dans le mot choisi par le programme alors
  tableau2[b]=proposition;
  //il stock la lettre à la bonne position dans le tableau2
  motchoisi.innerText="Voici le mot choisi " + tableau2
  //et on affiche en modifiant motchoisi grâce à "innerText" , la lettre à la bonne position dans le tableau2
  réussite=réussite+1;
  //si la lettre est dans le mot alors réussite prend +1
}else{

  réussite=réussite+0
  //sinon réussite ne prend PAS plus 1
}
}


if(réussite >0){
//si réussite est supérieur à 0 cela veut dire que l'utilisateur a bien trouvé une lettre
vie=vie+0;
//alors il ne perd pas
}else if(réussite==0){
vie=vie-1;
//sinon cela veut dire qu'il ne l'a pas trouvé , ainsi il PERD une vie
}
if(vie==9){
image1.style.visibility="visible";
//on rend visible image1 , c'est-à-dire le sol du pendu
}
if(vie==8){
image2.style.visibility="visible";
}
if(vie==7){
image3.style.visibility="visible";
}
if(vie==6){
image4.style.visibility="visible";
}
if(vie==5){
image5.style.visibility="visible";
}
if(vie==4){
image6.style.visibility="visible";
}
if(vie==3){
image7.style.visibility="visible";
}
if(vie==2){
image8.style.visibility="visible";
}
if(vie==1){
image9.style.visibility="visible";
réponse.style.visibility="hidden";
motchoisi.innerText="Vous avez perdu, le mot était : " + MotInconnu;
}
}
}
