//nav button

const navButton = document.getElementById("navButton");
const navButtonImage = document.getElementById("navButtonImage");
const navLinks = document.getElementById("navLinks");

let navOpen = false;
navButton.addEventListener("click",function(){
  if(navOpen === false){
    navOpen = true;
    navLinks.style.display = "flex";
    navButtonImage.src = "images/cross_green.png"
  }else{
    navOpen = false;
    navLinks.style.display = "none";
    navButtonImage.src = "images/Hamburger_icon_green.png"
  }
})

// cookie script

let x = document.cookie;

      if(x!=""){
        document.getElementById("gdpr-cookie-message").style.display = "none";
      }

      document.getElementById("gdpr-cookie-accept").addEventListener("click", function(){
        document.cookie = "visited=true";
        console.log(x);
        document.getElementById("gdpr-cookie-message").style.display = "none";
      })
      