// Variables
var fX = -25; // X variable for how centered the main fish will be
var fY = -25; // Y variable for how centered the main fish will be
var xFLIP = -1; // Flipping direction of the main fish
var growthFactor = 3; // How fast do you want to grow?
var o_fish_count = 0; // Number of background fishies (Don't touch!)
var o_fish_brightness = 3;
var o_fish_list = []; // Empty list for bg-fishies
var eaten = 0;

// Width + height 
var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

var height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;


function clog(anything){console.log(anything)} // I'm lazy = type less

// Removing from o_fish_list
function removeFish(fish){
  var index = o_fish_list.indexOf(fish);
  if (index > -1) { o_fish_list.splice(index, 1) }
  else { clog("Failed to remove " + fish) }
}

// Removing from html
function removeElement(id) {
  var element = document.getElementById(id);
  //clog(element);
  element.parentNode.removeChild(element);
}

// Big fish eat small fish helper function
function bigFishEating(){
  var d = document.getElementById('Mfish');
  var fishMain = d.getBoundingClientRect();
  var fList = [];
  // Convert list element to rextangle
  for (var i = 0; i < o_fish_list.length; i++){
    fList.push(o_fish_list[i].getBoundingClientRect());
  }
  // Remove upon overlap
  for (var i = 0; i < fList.length; i++){
    var overlap = !(fishMain.right < fList[i].left ||
                    fishMain.left > fList[i].right ||
                    fishMain.bottom < fList[i].top ||
                    fishMain.top > fList[i].bottom);
    if (overlap){
      removeElement(o_fish_list[i].id); // delete the fish when eaten
      removeFish(o_fish_list[i]); // remove fish from records
      eaten++;
      if (eaten <= 1){
        document.getElementById("eaten").innerHTML = "You've eaten " + 
                                                      eaten + " fishie";
      }
      else{
        document.getElementById("eaten").innerHTML = "You've eaten " + 
                                                      eaten + " fishies";
      }
    }
  }
}

// Constantly check if any fishies are overlapped by the big fish every 250 ms.
setInterval(function(){bigFishEating();}, 250);

// Let's Credit the source: http://jsbin.com/gejuz/1/edit?html,output
(function() {
  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

    // Use event.pageX / event.pageY here

    // Everything related to the main fishy is below here:
    var d = document.getElementById('Mfish');
    //d.style.position = "absolute";
    d.style.left = event.pageX + fX + "px";
    d.style.top = event.pageY + fY +'px';

    // Show coordinates if the url has "xy"
    if (location.hash.substr(1) == "xy"){
      var text = "X: " + event.pageX + ", Y: " + event.pageY +
      " | BGfishies: " + o_fish_count;
      document.getElementById("coord").innerHTML = text;
    }
    else{
      document.getElementById("coord").innerHTML = "";
    }

    if ( width / 2 > event.pageX ){
      xFLIP = 1;
      //d.classList.add("Mright");
      //d.classList.remove("Mleft");
    }
    else{
      xFLIP = -1;
      //d.classList.add("Mleft");
      //d.classList.remove("Mright");
    }
    var growth = 1;
    // don't scale until afterwards
    if ( growthFactor * Math.log(eaten) >=1 ) {
      growth = growthFactor * Math.log(eaten);
    }
    d.style.transform = "scaleX(" + xFLIP + ") scale(" + growth + ")";
    //clog(fList);

  }
})();
//////////////////////////
// End of main function //
//////////////////////////

// Background fishies
function otherFish(){
  // random numbers
  function randW(){
    min = Math.ceil(50);
    max = Math.floor(width - 50);
    // The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  function randH(){
    min = Math.ceil(50);
    max = Math.floor(height - 50);
    // The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Has darker colors
  //function getRandomColor() {
  //  var letters = 'FEDCBA9876543210';
  //  var color = '#';
  //  for (var i = 0; i < 6; i++) {
  //    //Base 16 :D
  //    color += letters[Math.floor(Math.random() * 16)];
  //  }
  //  return color;
  //}
  
  function getRandColor(brightness){
    // Six levels of brightness from 0 to 5, 0 being the darkest
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] +
    mix[2]].map(function(x){ return Math.round(x/2.0)});
    return "rgb(" + mixedrgb.join(",") + ")";
  }

  var itm = document.getElementById("o_fish");
  var e = itm.cloneNode(true);
  e.style.position = "absolute";
  e.style.display = "inline";
  e.id = "o_fish-" + o_fish_count; // Give the fish a unique id
  o_fish_list.push(e); // Add fish to list
  o_fish_count++; // increment the id by 1
  
  var child1 = e.children;
  //clog(child1);
  for (var i = 0; i < child1.length; i++) {
      if (child1[i].tagName == "g") {
        var child2 = child1[i].children;
        //clog(child2);
        for (var j = 0; j < child2.length; j++) {
          if (child2[j].tagName == "path") {
            o_fish_brightness = document.getElementById("brightRange").value;
            var color = getRandColor(o_fish_brightness);
            //clog(color);
            child2[j].style.fill = color;
          }
        }
      }
  }

  var holdRandW; // Was using this to debug

  function moveFishy(){
    holdRandW = randW()
    e.style.left = holdRandW + "px";
    e.style.top = randH() +'px';
    //clog(holdRandW);
    if ( holdRandW < width/2 ){
      e.classList.add("Oright");
      e.classList.remove("Oleft");
      //e.setAttribute('class','Oright');
      //clog(randH() + " | Oright");
    }
    else{
      e.classList.add("Oleft");
      e.classList.remove("Oright");
      //e.setAttribute('class','Oleft');
      //clog(randH() + " | Oleft");
    }
    setTimeout(moveFishy, 2000);
  }

  document.body.appendChild(e); // Add fish to the html
  moveFishy();

  if (o_fish_count == 25){
    //alert("Aren't you getting a bit crazy here...?");
  }
}
////////////////////////////
// End of background fish //
////////////////////////////

function moreFish(){
  //document.getElementById("FishIt").style.display = "none"; //Hide button
  otherFish();
}


//// Just a functon made to play with setInterval
//var countingTheRounds = 0;
//function backgroundDERP() {
//  //document.body.style.background = "#313F48";
//  function rndC() {
//    var letters = 'FEDCBA9876543210';
//    var color = '#';
//    for (var i = 0; i < 6; i++) {
//      //Base 16 :D
//      color += letters[Math.floor(Math.random() * 16)];
//    }
//    return color;
//  }
//  document.body.style.background = rndC();
//  clog("Hello " + ++countingTheRounds +" times!");
//}
////setInterval(function(){backgroundDERP()}, 3000);
//clog("I MADE IT")



