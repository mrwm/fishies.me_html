var eks = -3; // X variable for the fish to face towards
var o_fish_count = 0; // Number of background fishies (Don't touch!)
var o_fish_brightness = 3;
var o_fish_list = []; // Empty list for bg-fishies

// Width + height 
var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

var height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;


function clog(anything){console.log(anything)} //I'm lazy = type less

// Removing from array
//function removeFish(fish){
//  var index = o_fish_list.indexOf(fish);
//  if (index > -1) { o_fish_list.splice(index, 1) }
//  else { clog("Failed to remove" + fish) }
//}

// Removing from html
//Element.prototype.remove = function() {
//    this.parentElement.removeChild(this);
//}
//NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
//    for(var i = this.length - 1; i >= 0; i--) {
//        if(this[i] && this[i].parentElement) {
//            this[i].parentElement.removeChild(this[i]);
//        }
//    }
//}
// use: document.getElementById("theID").remove();


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
    d.style.left = event.pageX - eks + "px";
    d.style.top = event.pageY - 25 +'px';

    // Show coordinates if the url has "xy"
    if (location.hash.substr(1) == "xy"){
      //o_fish_count = document.getElementsByClassName("Oright").length +
      //document.getElementsByClassName("Oleft").length;
      var text = "X: " + event.pageX + ", Y: " + event.pageY +
      " | BGfishies: " + o_fish_count;
      document.getElementById("coord").innerHTML = text;
    }
    else{
      document.getElementById("coord").innerHTML = "";
    }

    if ( width / 2 > event.pageX ){
      d.className = "Mright";
      eks = -3;
    }
    else{
      d.className = "Mleft";
      eks = 50;
    }

//     // Everything related to the other fishies is below here
//    function helpFISH(fish){
//      // random number
//      min = Math.ceil(-75);
//      max = Math.floor(75);
//      function randy() {
//        // The maximum is inclusive and the minimum is inclusive
//        return Math.floor(Math.random() * (max - min + 1)) + min;
//      }

//      var e = document.getElementById(fish);
//      //e.style.position = "absolute";
//      e.style.left = event.pageX + randy() + "px";
//      e.style.top = event.pageY - randy() +'px';
//      if ( (width / 2 > event.pageX)){
//        e.className = "Sright";
//      }
//      else{
//        e.className = "Sleft";
//      }
//    }

//    // Spawn 5 fishies that swim around the main fish.
//    //helpFISH("Sfish1");
//    //helpFISH("Sfish2");
//    //helpFISH("Sfish3");
//    //helpFISH("Sfish4");
//    helpFISH("Sfish5");

    // Big fish eat small fish
    

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

  //var e = document.createElement('img');
  //e.setAttribute('src','o_fish.png');
  var itm = document.getElementById("o_fish");
  var e = itm.cloneNode(true);
  e.style.position = "absolute";
  e.style.display = "inline";
  e.id = "o_fish-" + o_fish_count; // Give the fish a unique id
  o_fish_list.push(e.id);
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
      //e.className = "Oright"; // fails to work
      e.setAttribute('class','Oright');
      //clog(randH() + " | Oright");
    }
    else{
      e.setAttribute('class','Oleft');
      //clog(randH() + " | Oleft");
    }
    setTimeout(moveFishy, 2000);
  }

  document.body.appendChild(e); // Add fish to the html
  moveFishy();

  if (o_fish_count == 25){
    //alert("Aren't you getting a bit crazy here...?");
  }
  //clog(o_fish_count);
  //clog(e);
}
////////////////////////////
// End of background fish //
////////////////////////////

function bbyFish(){
  document.getElementById("bbyFish").style.display = "none"; //Hide button
  document.getElementById("Sfish1").style.display = "inline";
  document.getElementById("Sfish2").style.display = "inline";
  document.getElementById("Sfish3").style.display = "inline";
  document.getElementById("Sfish4").style.display = "inline";
  document.getElementById("Sfish5").style.display = "inline";
  document.getElementById("brightContainer").style.display = "inline"; //Show slider
  document.getElementById("FishIt").style.display = "inline"; //Show next button
}

function moreFish(){
  //document.getElementById("FishIt").style.display = "none"; //Hide button
  otherFish();
}



