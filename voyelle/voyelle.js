exports.action = function(data){

try{
var reg="/"+data.lettre+"(.+)/i" ; var rgxp = eval(reg) ; var temp = JarvisIA.reco.match(rgxp); console.log(temp)
var phrase = temp[1].trim() ; console.log("on envoie : ",phrase)

phrase=phrase.replace(/ est une consonne/gi,'');
phrase=phrase.replace(/ est une voyelle/gi,'');
//Mathilde la lettre e consonne

function voyelle (lettre) {

    var voyelles = ['a','e','i','o','u','y'];
    var i = 0;
    while ((i<voyelles.length) && (lettre != voyelles[i])) {
	i = i+1;
    }
    return (i<voyelles.length);
}
for (lettre of [phrase]) {
    if (voyelle (lettre)) {
	   JarvisIASpeech("la lettre "+lettre+ " est une voyelle.");
            } 
    else {
	   //arvisIASpeech("la lettre "+lettre+ " n\'est pas une voyelle, mais une consonne.");
       JarvisIASpeech("la lettre "+lettre+ " est une consonne.");
            }
}

}catch(err){console.log(err);return }

}