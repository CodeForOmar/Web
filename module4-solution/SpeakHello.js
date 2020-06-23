// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =
// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
// STEP 4: Rewrite the 'speak' function such that it is attached to the



(function(window) {

	var speakWord = "Hello";

	var helloSpeaker = function (name) {

		console.log(speakWord + " " + name);

	}



	window.helloSpeaker = helloSpeaker;



})(window);