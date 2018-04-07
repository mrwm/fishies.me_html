function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}

// Animate dog across nav bar
var oldscroll = 0;
function dogRun(){
  var d = document.getElementById("doggo");
  var init = ( window.innerHeight / document.body.offsetHeight ) * 100;
  var progress = ( ((window.innerHeight + window.scrollY) /
                document.body.offsetHeight) * 100 ) - init;
  // Move the dog
  d.style.left = progress + "%";

  // detect @ bottom
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //alert("bottom!");
  }

  // Detect scroll direction and change dog direction accordingly
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > oldscroll){
    // downscroll code
    d.style.transform = "scaleX(1)";
  }
  else {
    // upscroll code
    d.style.transform = "scaleX(-1)";
  }
  oldscroll = st;
}

// Change the nav bar according to scroll
function navChange() {
  // Nav bar elements
  var index = document.getElementById("nav1"); //index
  var about = document.getElementById("nav2"); //about
  var proj = document.getElementById("nav3"); //proj
  var contact = document.getElementById("nav4"); //contact
  var resume = document.getElementById("nav5"); //resume

  // Section height
  var headImg = document.getElementById("headImg").offsetHeight;
  var sec1 = document.getElementById('sec1').offsetHeight; //about
  var sec2 = sec1 + document.getElementById('sec2').offsetHeight; //proj
  var sec3 = sec2 + document.getElementById('sec3').offsetHeight; //proj table
  var sec4 = sec3 + document.getElementById('sec4').offsetHeight; //contact

  // Change the nav bar according to pageYOffset 
  if (window.pageYOffset < headImg -2) {
    //nav1.style.cssText += ""; //directly changes the css
    index.className = "currentNav";
    about.className = "";
    proj.className = "";
    contact.className = "";
    //console.log("about!");
  }
  else if ((window.pageYOffset > headImg - 2) &&
          (window.pageYOffset < sec1 - 1)) {
    //nav1.style.cssText += ""; //directly changes the css
    index.className = "";
    about.className = "currentNav";
    proj.className = "";
    contact.className = "";
    //console.log("about!");
  }
  else if ((window.pageYOffset > sec1 - 1) && (window.pageYOffset < sec3 - 1)) {
    //nav1.style.cssText += ""; //directly changes the css
    index.className = "";
    about.className = "";
    proj.className = "currentNav";
    contact.className = "";
    //console.log("proj!");
  }
  else if ((window.pageYOffset > sec2 - 1)) {
    //nav1.style.cssText += "";
    index.className = "";
    about.className = "";
    proj.className = "";
    contact.className = "currentNav";
    //console.log("contact!");
  }
  else {
    //nav1.style.cssText += "";
    index.className = "";
    about.className = "";
    proj.className = "";
    contact.className = "";
    //console.log("derp!");
  }

  // Debug
  var coord = document.getElementById("coord");
  var doggo = document.getElementById("doggo");
  var hashes = location.hash.substr(1).split('#');
  var scrolly = window.innerHeight + window.scrollY;
  var dogProg = (scrolly / document.body.offsetHeight) * 100;
  var st = window.pageYOffset || document.documentElement.scrollTop
  var text1 = " st: " + st;
  var text = "Ytop: " + window.pageYOffset + " Ybottom: " + scrolly +
            " Dog: " + dogProg + "<br>" + text1;

  if (contains(hashes,'yy')){

    coord.innerHTML = text;
    coord.style.cssText += "background-color:rgba(255,255,255,1);";
  }
  if (contains(hashes,'dog')){
    dogRun();
  }
  if ( (!contains(hashes,'dog')) && (!contains(hashes,'yy')) ){
    coord.innerHTML = "";
    coord.style.cssText += "opacity:0;";
    doggo.innerHTML = "";
    doggo.style.cssText += "opacity:0;";
  }

}

window.onscroll = navChange;
