//On créé le paragraphe qui contiendra notre résultat.
let message =document.createElement("p");
// message.classList.add("conversion");
const cadre = document.querySelector("#cadre");
cadre.appendChild(message);

//On se place au niveau de l'input
const text=document.querySelector("input");



//Conversion reçoit l'élément de l'input. 
text.addEventListener("input", conversion);

//fonction conversion. Récupère l'input, tranforme la chaine de caractère en number et réalise la converions en franc
function conversion(e) {
    let nbre =parseFloat(e.target.value);
    console.log(typeof(nbre));
    if (isNaN(nbre)){  //NaN = Not a Number. Ce qui est renvoyé si nbre n'est pas un nombre positif.
        message.textContent="Veuillez entrer un nombre positif!"
    }else {
        message.textContent = (nbre*6.55957).toFixed(2) + " Fr"; //toFixed(2) arrondi à 2 chiffres après la virgule.
    }
    
    
  }