function clog(anything) { console.log(anything) } // I'm lazy = type less

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
var oldscroll = window.pageYOffset || document.documentElement.scrollTop;
function dogRun(){
  var d = document.getElementById("doggo");
  var progress = ( (window.scrollY /
                (document.body.offsetHeight - window.innerHeight)) * 95 );
  // Move the dog
  d.style.left = progress + "%";

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
  var sec2 = sec1 + document.getElementById('sec2').offsetHeight; //proj video
  var sec3 = sec2 + document.getElementById('sec3').offsetHeight; //proj table
  var sec4 = sec3 + document.getElementById('sec4').offsetHeight; //contact

  // Change the nav bar according to pageYOffset 
  if (window.pageYOffset < headImg -2) {
    //nav1.style.cssText += ""; //directly changes the css
    index.className = "currentNav";
    about.className = "";
    proj.className = "";
    contact.className = "";
    //clog(">about! | "+headImg);
  }
  else if ((window.pageYOffset > headImg - 2) &&
          (window.pageYOffset < sec2 - 1)) {
    //nav1.style.cssText += ""; //directly changes the css
    index.className = "";
    about.className = "currentNav";
    proj.className = "";
    contact.className = "";
    //clog("about! | "+sec1);
  }
  else if ((window.pageYOffset > sec1 - 1) && (window.pageYOffset < sec3 - 1)) {
    //nav1.style.cssText += ""; //directly changes the css
    index.className = "";
    about.className = "";
    proj.className = "currentNav";
    contact.className = "";
    //clog("proj! | "+sec3);
  }
  else if ((window.pageYOffset > sec3 - 1)) {
    //nav1.style.cssText += "";
    index.className = "";
    about.className = "";
    proj.className = "";
    contact.className = "currentNav";
    //clog("contact! | "+sec4);
  }
  else {
    //nav1.style.cssText += "";
    index.className = "";
    about.className = "";
    proj.className = "";
    contact.className = "";
    //clog("derp!");
  }

  // Variables
  var coord = document.getElementById("coord");
  var doggo = document.getElementById("doggo");
  var hashes = location.hash.substr(1).split('#');
  var scrolly = window.innerHeight + window.scrollY;
  var dogProg = (scrolly / document.body.offsetHeight) * 100;
  var st = window.pageYOffset || document.documentElement.scrollTop
  var text1 = " st: " + st + " scrollY: " + window.scrollY;
  var text = "pageYOffset: " + window.pageYOffset + " Ybottom: " + scrolly +
            " Dog: " + dogProg + "<br>" + text1;

  if (contains(hashes,'yy')){
    coord.innerHTML = text;
    coord.style.cssText += "background-color:rgba(255,255,255,1);";
  }
  else{
    coord.innerHTML = "";
    coord.style.cssText += "opacity:0;";
  }
  //They're two if statement so for independence from ordering
  if (contains(hashes,'dog')){
    dogRun();
  }
  else{
    doggo.innerHTML = "";
    doggo.style.cssText += "opacity:0;";
  }

}

window.onscroll = navChange;
