// function toggleRightNav() {
//     var body = document.getElementsByTagName('body')[0];
//     body.classList.toggle('hide-right-nav');
//   }
  
function menu(){




  if(document.querySelector("ul").style.display === "none"){
      document.querySelector("ul").style.display = "block"
      document.getElementById("nav-icon").innerHTML = "X"
  }
  
  else{
      document.querySelector("ul").style.display = "none"
      document.getElementById("nav-icon").innerHTML =" &#9776;"
  }
  
  
  }