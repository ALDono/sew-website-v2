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
      