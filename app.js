var eks = -3; // X variable for the fish to face towards

//Let's Credit the source: http://jsbin.com/gejuz/1/edit?html,output
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
    
    /**
     * 
     * Everything related to the main fishy is below here
     *
     **/
    
    var d = document.getElementById('Mfish');
    //d.style.position = "absolute";
    d.style.left = event.pageX - eks + "px";
    d.style.top = event.pageY - 25 +'px';
    
    //Show coordinates
    var text = "X: " + event.pageX + ", Y: " + event.pageY;
    document.getElementById("coord").innerHTML = text;
    
    //Width + height 
    var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    //var height = window.innerHeight
    //  || document.documentElement.clientHeight
    //  || document.body.clientHeight;
    
    if ( width / 2 > event.pageX ){
      d.className = "Mright";
      eks = -3;
    }
    else{
      d.className = "Mleft";
      eks = 50;
    }
    
    /**
     * 
     * Everything related to the other fishies is below here
     *
     **/
     
    
    function helpFISH(fish){
      // random number
      min = Math.ceil(-75);
      max = Math.floor(75);
      function randy() {
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
      }

      var e = document.getElementById(fish);
      //e.style.position = "absolute";0
      e.style.left = event.pageX + randy() + "px";
      e.style.top = event.pageY - randy() +'px';
      if ( width / 2 > event.pageX ){
        e.className = "Sright";
      }
      else{
        e.className = "Sleft";
      }

      //setTimeout(helpFISH, 1000, fish); //for some reason, this glitches the small fishies
    }

    
    helpFISH("Sfish1");
    helpFISH("Sfish2");
    helpFISH("Sfish3");
    helpFISH("Sfish4");
    helpFISH("Sfish5");
    /*
    helpFISH("Sfish6");
    helpFISH("Sfish7");
    helpFISH("Sfish8");
    helpFISH("Sfish9");
    helpFISH("Sfish10");
    */
  }
})();




