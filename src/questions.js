/*
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

// Donner la taille d\'une chaine de caractères
var tailleString = function(text) {
    return text.length ;
};

// Remplacer le premier e d\'une chaine par un espace
var replaceE=function(text){
    return text.replace("e"," ");
}

// Concatener deux chaines de caractères
var concatString=function(a,b){
    return a+" "+b;
};

// Afficher le cinquième caractère d\'une chaine
var showTheFifthLetter=function(text){
    return text.charAt(4);
};


// Afficher les 9 premiers caractères dune chaîne de caractère
var showFirstNineLetter=function(text){
    return text.substring(0, 8);
};

// Mettre en majuscule la chaine
var changeToUper=function(text){
    return text.toUpperCase();
};

// Mettre en minuscule la chaine
var changeToLower=function(text){
    return text.toLowerCase();
};

//Supprimer les espaces avant et après la chaine
 var deletSpace=function(text){
     return text.trim();
 };

 //Afficher true si le parametre d\'entrée de la fonction est de type string
 var getBoolean =function(text){
     if(typeof text === "string"){
         return true;
     }
 };

 //Afficher l\'extension du fichier
 var showExtenct=function(text){
    return text.split('.').pop();
};

//Compter le nombre d\'espace dans la chaine
var countSpace=function(text){
    return text.split(' ').length - 1;
};


//Inverser une chaine de caractères
var reverseString=function(text){
    return text.split('').reverse().join('');
};


