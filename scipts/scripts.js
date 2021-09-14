window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 80) {
        //Changing:
        //->nav bar background colour to white on scroll
        document.getElementById("nav").style.background="#FFF";
        //->Adding box shadow
        document.getElementById("nav").style.boxShadow="0px 0px 5px 0px rgba(0,0,0,0.75)";
        //->Calling function that changes text-colour of the navitem
        colorBlack(document.querySelectorAll("nav ul li a"));
        //->Changing colour of the hamburger menu
        document.getElementById('j-point').style.color="#000";

        //->Changing logo from white background to original
        document.getElementById('logo-main').src="./images/logo/logo1.svg";
        //Adding animations
        animationAdder();
    } else if(document.body.scrollTop < 40 || document.documentElement.scrollTop < 80 || document.getElementById("nav")){
        document.getElementById("nav").style.background="transparent";
        document.getElementById("nav").style.boxShadow="0 0 0 0 white";
        colorWhite(document.querySelectorAll("nav ul li a"));
        document.getElementById('j-point').style.color="#f5f5f5";
        document.getElementById('logo-main').src="./images/logo/logo1_white.svg";
    }
}
function colorBlack(array){
  for(let i=0;i<6;i++){
      array[i].style.color="#000";
  }
}
function colorWhite(array){
    for(let i=0;i<6;i++){
      array[i].style.color="#f5f5f5";
  }
}

function animationAdder(){  
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 80){
        //Adding animation: 
    let element = document.querySelector('.what-we-do');
    element.classList.add('animate__animated', 'animate__fadeInUp');
    let elementThree = document.querySelector('.button-container');
    elementThree.classList.add('animate__animated','animate__pulse','animate__repeat-3','animate__slower')
    }
}
