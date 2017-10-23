var jsonData;

function doRectClick(){
  var myrect = document.getElementById('hexa');
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  myrect.style.fill = 'rgb(' + r + ', ' + g + ' , ' + b + ')'; 
}

function jsClick(clickedId){
  var myrect = document.getElementById(clickedId);
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  myrect.style.fill = 'rgb(' + r + ', ' + g + ' , ' + b + ')'; 
}

function jsBlur(clickedId) {
	var input = document.getElementById(clickedId);
	
	/* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split */
	
	interpretAsEflPomEntry(input);	
	
	var stringToPaste = toXmlString(jsonData);
	
	document.getElementById("copyTextArea").textContent = stringToPaste;	
	document.getElementById("copyTextArea").select();
	document.execCommand('copy') ;
	
	
	ajouteElement(stringToPaste);
	
	input.textContent = "";
	
	
}

function interpretAsEflPomEntry(inputString) {
	var vector = input.textContent.split("\n");	

	jsonData = {"artifactId" : vector[1], "groupId" : vector[2], "version" : vector[3]};
}

/* https://developer.mozilla.org/fr/docs/Web/API/Document/createElement */
function ajouteElement(text) {
  // crée un nouvel élément div
  // et lui donne un peu de contenu
  const nouveauDiv = document.createElement("div");
  const nouveauContenu = document.createTextNode(text);
  nouveauDiv.appendChild(nouveauContenu) //ajoute le contenu au div
  
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  const divActuel = document.getElementById("console");
  document.body.insertBefore(nouveauDiv, divActuel);
}

function toXmlString(jsonData) {
	var result = "";
	/*for(var i= 0; i < Object.keys(jsonData).size() ; i++) {
		result += "<" + Object.keys(jsonData[i]) + ">";
		result += jsonData[i];
		result += "</" + Object.keys(jsonData[i]) + ">";
	}*/
	
	for (var prop in jsonData) {
		result += "<" + prop + ">";
		result += jsonData[prop];
		result += "</" + prop + ">";
	}
	
	return result;
}

['cut', 'copy', 'paste'].forEach(function(event) {
    document.addEventListener(event, function(e) {
        console.log(event);   
    });
});