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


//image magnify
const zoomer = (e => { 
    const imageBox = document.querySelector(".img-zoomer-box");
    const original = document.querySelector("#img-1");
    const magnified = document.querySelector("#img-2");
  
    function handleMouseMoves(e) {
      const style = magnified.style;
      const x = e.pageX - this.offsetLeft;
      const y = e.pageY - this.offsetTop;
      const imgWidth = original.offsetWidth;
      const imgHeight = original.offsetHeight;
      let xperc = (x / imgWidth) * 100;
      let yperc = (y / imgHeight) * 100;
  
      //lets user scroll past right edge of image
      if (x >= 0.01 * imgWidth) {
        xperc *= 1.15;
      }
  
      //lets user scroll past bottom edge of image
      if (y >= 0.01 * imgHeight) {
        yperc *= 1.15;
      }
  
      style.backgroundPositionX = `${xperc - 9}%`;
      style.backgroundPositionY = `${yperc - 9}%`;
    //This adjusts the position of the magnifying glass   
      style.left = `${x + 150}px`;
      style.top = `${y + 180}px`;
    }
  
    imageBox.addEventListener("mousemove", handleMouseMoves);
  })();


  //image change
    const prevImg1 = document.querySelector("#previewImg1");
    const prevImg2 = document.querySelector("#previewImg2");
    const prevImg3 = document.querySelector("#previewImg3");
    const zoomImg = document.querySelector("#img-2");
    const mainImg = document.querySelector("#img-1");

      zoomImg.style.backgroundImage = 'url('+mainImg.src+')';

    prevImg1.addEventListener("click",function(){
        mainImg.src = this.src ;
        zoomImg.style.backgroundImage = 'url('+this.src+')';
    })

    prevImg2.addEventListener("click",function(){
        mainImg.src = this.src ;
        zoomImg.style.backgroundImage = 'url('+this.src+')';
    })
    
    prevImg3.addEventListener("click",function(){
        mainImg.src = this.src ;
        zoomImg.style.backgroundImage = 'url('+this.src+')';
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
      