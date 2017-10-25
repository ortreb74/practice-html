var xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>';

var headerAttributes = { "xmlns": "http://maven.apache.org/POM/4.0.0",
				         "xmlns:xsi" : "http://www.w3.org/2001/XMLSchema-instance",
				         "xsi:schemaLocation" : "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" 
					}
				

   
  

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

function transformExcelToEflPom(clickedId) {
	var input = document.getElementById(clickedId);
	
	/* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split */
	
	var jsonData = interpretAsEflPomEntry(input);	
	input.textContent = "";
	
	var stringToPaste = xmlDeclaration;
	
	stringToPaste += openElement("project", headerAttributes);	
	stringToPaste += addSimpleElement("modelVersion" , "4.0.0");	
	stringToPaste += toXmlString(jsonData);	
	stringToPaste += closeElement("project");
	
	copyToClipboard(stringToPaste);		
	input.textContent = "";	
}

function interpretAsEflPomEntry(inputString) {
	var vector = input.textContent.split("\n");	

	return {"artifactId" : vector[1], "groupId" : vector[2], "version" : vector[3]};
}

function toXmlString(jsonData) {
	var result = "";
	
	for (var prop in jsonData) {
		result += "<" + prop + ">";
		result += jsonData[prop];
		result += "</" + prop + ">";
	}
	
	return result;
}

function openElement(elementName, attributes) {
	var result = "";
	
	result += "<" + elementName + " ";
	
	var start = true;
	
	for (var prop in attributes) {		
		result += prop;		
		result += '="';
		result += attributes[prop];		
		result += '"';
		if (!start) result += " ";
		start = false;
	}
	
	result += ">";
	
	return result;		
}

function addSimpleElement(elementName, elementValue) {
	var result = "";
	
	result += "<" + elementName + ">";	
	result += elementValue;			
	result += "</" + elementName + ">";	
	
	return result;	
}

function closeElement(elementName, elementValue) {
	return "</" + elementName + ">";;
}

function copyToClipboard(stringToPaste) {
	/*document.getElementById("copyTextArea").value = "";*/
	document.getElementById("copyTextArea").textContent = stringToPaste;	
	document.getElementById("copyTextArea").select();
	document.execCommand('copy') ;	
	
	addToInsideConsole(stringToPaste);
}

/* https://developer.mozilla.org/fr/docs/Web/API/Document/createElement */
function addToInsideConsole(text) {
  // crée un nouvel élément div
  // et lui donne un peu de contenu
  const nouveauDiv = document.createElement("div");
  const nouveauContenu = document.createTextNode(text);
  nouveauDiv.appendChild(nouveauContenu) //ajoute le contenu au div
  
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  const divActuel = document.getElementById("console");
  document.body.insertBefore(nouveauDiv, divActuel);
}

