// Variables
var spawnSpeed = 2500;

// Brightness slider stuff
var brightness = document.getElementById("brightRange");
var brightOutput = document.getElementById("brightOut");
brightOutput.innerHTML = brightness.value;

brightness.oninput = function() {
  brightOutput.innerHTML = this.value;
}

// Spawn slider stuff
var spawnSpeed = document.getElementById("spawnRange");
var spawnOutput = document.getElementById("spawnOut");
spawnOutput.innerHTML = spawnSpeed.value;

spawnSpeed.oninput = function() {
  var val = this.value
  spawnOutput.innerHTML = val;
  var timeOfDelay = 100;
  if (val != 5){
    timeOfDelay *= 10;
    for (var i = 0; i < (4 - val); i++){
      timeOfDelay += 500;
    }
  }
  clog(timeOfDelay);
  spawnSpeed = timeOfDelay;

}

// Dark mode stuff
var colorToggle = document.getElementById("toggleBox");
var child1 = document.body.childNodes;

// Helper function for searching and setting colors
function recurseDark(child){
  for (var i = 0; i < child.length; i++) {
    if ( child[i].tagName != null ){
      child[i].classList.toggle('darken');
      recurseDark(child[i]);
    }
  }
}

function darkThis(_this) {
  // Set bg before everything else
  if (_this.checked){ document.body.style.background = "#313F48" }
  else { document.body.style.background = "#A8DBFB" }
  // Recursively search and change colors
  recurseDark(child1);
}

// Constantly Spawn
var constaSawnFish;
function constaSpawn(_this) {
  if (_this.checked) {
    constaSawnFish = setInterval(moreFish, spawnSpeed);
  }
  else {
    clearInterval(constaSawnFish);
  }
}

