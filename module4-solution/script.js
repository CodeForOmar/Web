// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//


(function () {
var names = ["Yaakov", "Jahra", "Jahanghir", "Jafar", "Omar", "Mushfiya", "Shabib", "Saeed", "Bahar", "Jalal"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  } else {
    helloSpeaker(names[i]);
  }
}

})();
