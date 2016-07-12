
//  http://www.w3schools.com/js/js_array_methods.asp


//Créer un tableau "langages" contenant "Html", "CSS", "Java", "PHP"'
function CreationTableauLangages(){
	return (langages) = ["Html", "CSS", "Java", "PHP"];
}


//		Créer un tableau "nombres" contenant les nombres de 0 à 5', function () {
  //    var nombres = CreationTableauNombres();
    //  expect(nombres).toEqual([0,1,2,3,4,5]);

    function CreationTableauNombres() {
    	return (nombres) = [0, 1, 2, 3, 4, 5];
    }


    //Remplacer le troisième élément du tableau par "Javascript"', function () {
      //var langages = ["Html","CSS","Java","PHP"];
      //var langages = RemplacementElement(langages);
      //expect(langages).toEqual(['Html', 'CSS', 'Javascript', 'PHP']);

      function RemplacementElement(langages) {
       langages.splice(2, 1, "Javascript");
      return langages;
  }


     // Ajouter "Ruby" et "Python" à la fin du tableau', function () {
      //var langages = ['Html', 'CSS', 'Javascript', 'PHP'];
      //var langages = AjoutElementLangages(langages);
      //expect(langages).toEqual(['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python']);

      function AjoutElementLangages(langages){
      	langages.splice(4,0, "Ruby", "Python");
    return langages;
}

//Ajouter "-2" et "-1" au début du tableau nombres', function () {
     //var nombres = [0,1,2,3,4,5];
    //  var nombres = AjoutElementNombres(nombres);::::::::::::::: arr.unshift([élém1[, ...[, élémN]]])
     // expect(nombres).toEqual([-2,-1,0,1,2,3,4,5]);
 
 //function AjoutElementNombres(nombres) {
   // 	return nombres.splice(0,-2,-1);
    //}
    function AjoutElementNombres(){
var chiffresNegatifs = [-2,-1];
var nombres = [0, 1, 2, 3, 4, 5];
return result = chiffresNegatifs.concat(nombres);
}
    //Supprimer le premier élément du tableau langages', function () {
      //var langages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
      //var langages = SuppressionPremierElement(langages);
      //expect(langages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby', 'Python']);
function SuppressionPremierElement(langages) {
    	langages.shift([0]);
      return langages;
    }


    //Supprimer le dernier élément du tableau langages', function () {
    //  var langages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
     // var langages = SuppressionDernierElement(langages);
     // expect(langages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby']);
     function SuppressionDernierElement(langages){
     	langages.pop();
      return langages;
     }

//'Faire de la chaîne "reseaux_sociaux_chaine" un tableau "reseaux_sociaux"', function () 
    //  var reseaux_sociaux_chaine = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
    //  var reseaux_sociaux = ConversionChaineTableau(reseaux_sociaux_chaine);
    //  expect(reseaux_sociaux).toEqual(['Facebook','Twitter', 'Google +','Viadeo','LinkedIn']);

   function ConversionChaineTableau(reseaux_sociaux_chaine) {
  reseaux_sociaux = reseaux_sociaux_chaine.split(",");
  return reseaux_sociaux;
}


 //Faire du tableau "langages" une chaîne "langages_chaine". Séparer les langages par une virgule', function () {
  //    var langages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
   //   var langages_chaine = ConversionTableauChaine(langages);
    //  expect(langages_chaine).toEqual("CSS,Javascript,PHP,Ruby");
function ConversionTableauChaine (langages){
langages_chaine = langages.join(",");
return langages_chaine;
}

//Trier le tableau "reseaux_sociaux"', function () {
     // var reseaux_sociaux = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
    //  var reseaux_sociaux = TriTableau(reseaux_sociaux);
    //  expect(reseaux_sociaux).toEqual(['Facebook','Google +','LinkedIn','Twitter','Viadeo']);

//		var items = ["réservé", "premier", "cliché", "communiqué", "café" ,"adieu"];
//			items.sort(function (a, b) {
  //  		return a.localeCompare(b);
//			});

// items is [ 'adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé' ]

function TriTableau(reseaux_sociaux) {
	return reseaux_sociaux.sort();
}


//BONUS
//it('Inverser le tableau "langages"', function () {
    //  var langages = ['CSS','Javascript','PHP','Ruby'];
    //  var langages = InversionTableau(langages);
    //  expect(langages).toEqual(["Ruby", "PHP", "Javascript", "CSS"]);

    //fruits.reverse();
function InversionTableau (langages){
return langages.reverse();
}





    //it('Ordonnez le tableau "languages" en fonction du nombre de caractères présents dans la chaine' function(){
     // var languages = ['C#','Javascript','PHP','Ruby'];
    //  var languages = TriSpecial(languages);
    //  expect(languages).toEqual(["C#", "PHP", "Ruby", "Javascript"]);

//Comparing string properties is a little more complex:

//cars.sort(function(a, b){
    //var x = a.type.toLowerCase();
    //var y = b.type.toLowerCase();
    //if (x < y) {return -1;}
   // if (x > y) {return 1;}
   // return 0;
//});



function TriSpecial(languages){
	result = languages.sort(function(a, b){
		var x = a.length;
		var y = b.length;
		if (x < y) {
			return -1;
		}
		if (x > y) {
			return 1;
		}
		//return 0;
	});
	return result;
}