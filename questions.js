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