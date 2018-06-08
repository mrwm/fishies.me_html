/* Inserting Youtube videos */

/*
// Functions for playing around with the HTML
function largV(x) {
//    x.style.height = "190px";
//    x.style.width = "520px";
}

function normV(x) {
//    x.style.height = "100px";
//    x.style.width = "360px";
}
*/

// A messy function to get youtube iframes
function video(x){
  var v = x; //location.hash.substr(1); //Video by URL fails
  if ( v=="swap1" ){ 
    return "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/JNC11RvdM2A' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
  }
  else if ( v=="swap2" ){
    return "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/8Y84Cst_FbY' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
  }
  else if ( v=="swap3" ){
    return "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/3fwTuPUb7C4' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
  }
  else if ( v=="swap4" ){
    return "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/3-92rZczkxo' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
  }
  else if ( v=="swap5" ){
    return "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/5KPq_6nXDu4' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
  }
  else if ( v=="currentVid" ){
    return "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/KnuCyCK4L5E' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
    //return "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/8K12atna3wc' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
  }
  else{
    return null;
  }
}

function vidShow(x){
  var tmp = document.getElementById(x).innerHTML;
  var vidWindow = document.getElementById("currentVid");
  tmp = vidWindow.innerHTML;
  vidWindow.innerHTML = video(x);
}

// Using the space here to save from the clutter
function links(x) {
  if (x == "webGal"){
    return "http://will.webutu.com"
  }
  else if (x == "fishies") {
    return "https://www.fishies.me";
  }
  else if (x == "doggo"){
    return "https://chrome.google.com/webstore/detail/doggo-bar/jcpkamjdbelgcadjpljdljkelglhkbcg";
  }
  else if (x == "jlight"){
    return "https://github.com/wiiliam/jasper-light";
  }
  else if (x == "yt-profile"){
    return "https://www.youtube.com/channel/UCs1p8xBEkCDcGDR_-BCHGlA";
  }
  else if (x == "gp-profile"){
    return "https://plus.google.com/+WillCyouSoon";
  }
  else if (x == "gh-profile"){
    return "https://github.com/wiiliam";
  }
  else if (x == "fb-profile"){
    return "https://www.facebook.com/WillCyouSoon";
  }
  else if (x == "email"){
    return "mailto:william.chung@sjsu.edu";
  }
  else{
    return null;
  }
}

function openTab(x) {
  window.open(links(x), "_blank")
}
