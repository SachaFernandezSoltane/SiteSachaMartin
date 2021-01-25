var AffichQuestion=document.getElementById("AffichQuestion");
//définie une variable qui recherche l'élément avec une ID "AffichQuestion"
var Vérification=document.getElementById("Vérification");
var solution="";
var Vie=document.getElementById("NbrVie");
Vérification.style.visibility = "hidden";
var tableau= [];
//on défini un tableau sans définir sa longueur
tableau[0]="1+1";
tableau[1]="Quelle est la couleur du cheval blanc d'Henry 4?";
tableau[2]="j'ai trois bras, deux jambes, quatre tête, qui suis-je?";
tableau[3]="Sans même regarder, je vois aussi clair dans l'obscurité que le jour. Qui suis-je ?";
tableau[4]="J'étais demain et je serai hier. Qui suis-je ?";



function afficher() {

  for(let i=0;i<tableau.length;i++){
  //on parcours le tableau
  var choix=tableau[Math.floor(Math.random() * tableau.length)];
  //on choisi aléatoirement une question dans ce tableau
  }

  if(choix=="1+1"){
  //si le choix est égale à 1
  Vérification.style.visibility = "hidden";
  //on cache la question qui s'affiche à l'écran
  solution="2";
  //on défini la solution
  AffichQuestion.innerText="la question est la suivante : 1+1 ".toUpperCase();
  //on affiche la question en modifiant AffichQuestion grâce à innerText
  }else if(choix=="Quelle est la couleur du cheval blanc d'Henry 4?"){
  Vérification.style.visibility = "hidden";
  solution="blanche".toUpperCase();
  AffichQuestion.innerText="La question est la suivante : Quelle est la couleur du cheval blanc d'Henry 4?".toUpperCase() ;
  }else if(choix=="j'ai trois bras, deux jambes, quatre tête, qui suis-je?"){
  Vérification.style.visibility = "hidden";
  solution="un menteur".toUpperCase();
  AffichQuestion.innerText="La question est la suivante : j'ai trois bras, deux jambes, quatre tête, qui suis-je?".toUpperCase();
  }else if(choix=="Sans même regarder, je vois aussi clair dans l'obscurité que le jour. Qui suis-je ?"){
  Vérification.style.visibility = "hidden";
  solution="une chauve-souris".toUpperCase();
  AffichQuestion.innerText="La question est la suivante : Sans même regarder, je vois aussi clair dans l'obscurité que le jour. Qui suis-je ?".toUpperCase();
  }
  else if(choix=="J'étais demain et je serai hier. Qui suis-je ?"){
  Vérification.style.visibility = "hidden";
  solution="le présent".toUpperCase();
  AffichQuestion.innerText="La question est la suivante : J'étais demain et je serai hier. Qui suis-je ?".toUpperCase();
  }
  }

var NbrVie=3;

function verification() {

  var proposition=document.getElementById("ligne");
  //définie une variable qui recherche l'élément avec une ID "ligne"
  var zoneText2=document.getElementById("réponse");
  var AccèsProposition=proposition.value;
  //on accès a proposition grâce à .value
  if (AccèsProposition.toUpperCase() !=solution) {
  //si ce la réponse de l'utilisateur n'est pas la même que la solution à la question
    Vérification.style.visibility = "visible";
    Vérification.innerText="Avez vous trouvez la bonne réponse ? : NON , c'est raté";
    //on modifie vérification pour afficher à l'utilisateur qu'il s'est trompé
    NbrVie=NbrVie-1;
    //il perd une vie
    Vie.innerText=NbrVie;
    //on le nombre de vie actuel
  }
  if (AccèsProposition.toUpperCase() == solution) {
  //si ce la réponse de l'utilisateur est la même que la solution à la question
    zoneText2.style.visibility= "hidden";
  //on cache l'endroit où l'utilisateur rentre une réponse
    Vérification.style.visibility = "visible";
  //on rend visible " avez-vous trouvez une réponse" grâce à "visible"
    Vérification.innerText="Avez vous trouvez la bonne réponse ? : OUI , bien joué";
  //on indique à l'utilisateur qu'il a gagné en modifiant la question,c'est-à-dire "Vérification" grâce à "inner.Text"
  }
  if(NbrVie==0){
  //si l'utilisateur n'a plus de vie alors
    zoneText2.style.visibility= "hidden";
  //on cache l'endroit où l'utilisateur rentre une réponse , ainsi il ne peut plus jouer
  }

  }
