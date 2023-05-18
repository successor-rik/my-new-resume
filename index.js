var random1=Math.random(0,6);
random1=Math.floor(random1*(6))+1;

var random2=Math.random(0,6);
random2=Math.floor(random2*(6))+1;

var random3=Math.random(0,6);
random3=Math.floor(random3*(6))+1;

 var randomImage1="/images/dice"+random1+".png";
 var randomImage2="/images/dice"+random2+".png";
 var randomImage3="/images/dice"+random3+".png";


 var a=document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
 var b=document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
 var c=document.querySelectorAll("img")[2].setAttribute("src",randomImage3);

 if(random1>random2 && random1>random3){
    document.querySelector("h1").innerHTML="Arijit Wins!";
 }
 else if(random2>random1 && random2>random3)
 {
    document.querySelector("h1").innerHTML="Gunjan Wins!";
 }
 else if(random3>random1 && random3>random2)
 {
 document.querySelector("h1").innerHTML="Sanu Wins!";
 }
 else {
    document.querySelector("h1").innerHTML="Error!";
 }
 
 