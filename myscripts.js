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


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry.target.className)
    let subStr = entry.target.className;
    if (entry.isIntersecting && subStr.includes("block-left")){
      entry.target.classList.add("first-block-anim");
    }
    if (entry.isIntersecting && subStr.includes("block-right")){
      entry.target.classList.add("second-block-anim");
    }
  });
});

const aboutElement = document.querySelectorAll("#first-block");
const articleLeftElement = document.querySelectorAll("#second-block");
const articleRightElement = document.querySelectorAll("#third-block");

aboutElement.forEach((el) => observer.observe(el));
articleLeftElement.forEach((el) => observer.observe(el));
articleRightElement.forEach((el) => observer.observe(el));
