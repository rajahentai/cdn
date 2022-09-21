 t = document.querySelector("body>header>nav"), r = document.querySelector("body>header>div>button"), t && r && r.addEventListener("click", function() {
                t.classList.toggle("expand")
            });
setTimeout(function() {
  debugger;
}, 3000);
if(typeof document.onselectstart!="undefined"){document.onselectstart=new Function ("return false");}else{document.onmousedown=new Function ("return false");document.onmouseup=new Function ("return true");}
    document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
     return false;
  }
}            
//<![CDATA[

// Say Hi to Adblock

function downloadJSAtOnload(){var e=document.createElement("script");e.src="https://cdn.jsdelivr.net/gh/Arlina-Design/quasar@master/arlinablock.js",document.body.appendChild(e)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;

//]]>
