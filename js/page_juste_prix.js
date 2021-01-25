var Demarrer=document.getElementById("démarrer");
//défini une variable qui recherche l'élément avec une ID "démarrer"
var Proposition=document.getElementById("Proposition");
var Compteàrebours=document.getElementById("Compte à rebours");
var Victoire=document.getElementById("Victoire");
var NbrAléa= Math.floor(Math.random()*(100));
var Compteur=30;
//le compteur servira pour le compte à rebours ,c'est-à-dire 30 secondes
var score=0;
var Compteàrebours2=document.getElementById('Compte à rebours2');
var Essais=document.getElementById("Essais");
Victoire.style.visibility="hidden";
Proposition.style.visibility= "hidden";
console.log(NbrAléa);

function lancer(){

Proposition.style.visibility= "visible";
//permet de rendre visible la partie où l'utilisateur rentre une proposition
var temps=setInterval(function(){
//setInterval appelle une fonction de manière répétée , toutes les 1000 ms soit 1 s
  Compteàrebours.innerText=Compteur;
//Le compte à rebours devient Compteur , c'est-à-dire 30
  Compteur=Compteur-1;
//chaque secondes , compteur prend -1
  score++;
//chaque secondes , score prend +1
  if(Compteur==0 ) {
//si le compteur tombe à 0
  setTimeout(function(){
//alors on appelle la fonction setTimeout
  Compteàrebours.innerText="GAME OVER"
  clearInterval(temps);
//clearInterval permet d'arrêter une action qui se répète
  Proposition.style.visibility= "hidden";
//on cache la partie ou l'utilisateur rentre une proposition
  Démarrer.style.visibility= "hidden";
//on cache le bouton qui permet de lancer le compte à rebours

}, 1000);
  }
},1000);

}

function verification(){

  var TentativeJoueur=document.getElementById("ligne");
  //défini une variable qui recherche l'élément avec une ID "ligne"
  var AccèsTentativeJoueur=TentativeJoueur.value;
  //Accès au contenu de la variable
    if (AccèsTentativeJoueur > NbrAléa) {
  //si le nombre entré par le joueur est supérieur à celui qu'il doit trouver
      Essais.innerText="MOINS";
  //alors il affiche MOINS à l'écran
    }
    if (AccèsTentativeJoueur < NbrAléa) {
  //si le nombre entré par le joueur est inférieur à celui qu'il doit trouver
      Essais.innerText="PLUS";
  //alors il affiche PLUS à l'écran
    }
    if (AccèsTentativeJoueur == NbrAléa) {

      Compteàrebours2.innerText="BIEN JOUE";
      Proposition.style.visibility= "hidden";
      démarrer.style.visibility= "hidden";
      Compteàrebours.style.visibility="hidden";
      Victoire.style.visibility="visible";
      alert(score-1);


    }
  }
