console.log("akdcnaerf") ;
var  guest = document.getElementsByClassName("guest") ;
var title = guest[0]
var para = guest[2]
var submit = guest[1]
var isShopper = false ;
var type = document.getElementById("mce-TYPE") ;
var checker = document.getElementById("switch-button-checkbox") ;
var checker2 = document.getElementById("switch-button-label") ;
var img  = document.getElementById("open_menu") ;





function openx(){
     var header = document.getElementsByClassName("header-page")[0] ;
     if(header.style.display == "none" ){
       header.style.display = "block"
       img.src = "assets/cancel.png"
     } else {
        header.style.display = "none"
        img.src = "assets/menu.png"
     } ;
}

function check() {
   console.log("checked") ;
   if (isShopper){
      isShopper = false
      title.innerHTML = "BUSINESS"
      para.innerHTML = "THANKS FOR JOINING THE BUSINESS WAITLIST FOR HIGH INTERESTED SHOPPERS. STAY UP TO DATE FOR WHEN WE LAUNCH "
      submit.value = "SELL WITH US"
      submit.id = "submit" ;
      title.id = "guest" ;
      checker.classList.remove("switch-button-checkbox-after")
      checker.classList.add("switch-button-checkbox")
      checker2.classList.remove("switch-button-label-after")
      checker2.classList.add("switch-button-label")
      type.value = "Vendor"
    } else {
    isShopper = true
    title.innerHTML = "SHOPPERS"
    para.innerHTML = "THANKS FOR JOINING THE SHOPPERS WAITLIST FOR BRANDS YOU LOVE. STAY UP TO DATE FOR WHEN WE LAUNCH"
    submit.value = "SHOP WITH US"
    type.value = "Shopper"
    submit.id = "submit2" ;
    title.id = "guest2";
    checker.classList.remove("switch-button-checkbox")
    checker.classList.add("switch-button-checkbox-after")
    checker2.classList.remove("switch-button-label")
    checker2.classList.add("switch-button-label-after")
}
} 

  // Get the modal
var modal = document.getElementById("myModal");
var aboutmodal = document.getElementById("aboutmodule");


// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtnc");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];






function openmodel(){
  modal.style.display = "block";
}
function openaboutmodel(){
  aboutmodal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  aboutmodal.style.display = "none";

}
span1.onclick = function() {
  modal.style.display = "none";
  aboutmodal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == aboutmodal) {
    modal.style.display = "none";
    aboutmodal.style.display = "none" ; 
  }
}

function toform(){
  window.scrollTo(0,document.body.scrollHeight);
}






//************ for phone */


var  guest2 = document.getElementsByClassName("guest-2") ;
var title2 = guest2[0]
var para2 = guest2[2]
var submit2 = guest2[1]
var type2 = document.getElementById("mce-TYPE-2") ;
var checker_2= document.getElementById("switch-button-checkbox-2") ;
var checker22 = document.getElementById("switch-button-label-2") ;




function check2() {
console.log("checked") ;
if (isShopper){
   isShopper = false
   title2.innerHTML = "BUSINESS"
   para2.innerHTML = "THANKS FOR JOINING THE BUSINESS WAITLIST FOR HIGH INTERESTED SHOPPERS. STAY UP TO DATE FOR WHEN WE LAUNCH "
   submit2.value = "SELL WITH US"
   submit2.id = "submit" ;
   title2.id = "guest" ;
   checker_2.classList.remove("switch-button-checkbox-after")
   checker_2.classList.add("switch-button-checkbox")
   checker22.classList.remove("switch-button-label-after")
   checker22.classList.add("switch-button-label")
   type2.value = "Vendor"
 } else {
 isShopper = true
 title2.innerHTML = "SHOPPERS"
 para2.innerHTML = "THANKS FOR JOINING THE SHOPPERS WAITLIST FOR BRANDS YOU LOVE. STAY UP TO DATE FOR WHEN WE LAUNCH"
 submit2.value = "SHOP WITH US"
 type2.value = "Shopper"
 submit2.id = "submit2" ;
 title2.id = "guest2";
 checker_2.classList.remove("switch-button-checkbox")
 checker_2.classList.add("switch-button-checkbox-after")
 checker22.classList.remove("switch-button-label")
 checker22.classList.add("switch-button-label-after")
}
} 




function toform(){
window.scrollTo(0,document.body.scrollHeight);
}



