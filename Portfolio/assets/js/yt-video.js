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
    return "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/8K12atna3wc' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
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
