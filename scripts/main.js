//images rotation
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 3000); // Change image every 2 seconds
}
//creating button and heading variable
var myButton = document.querySelector('button');
var myHeading2 = document.querySelector('h2');
//Setting name for heading
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading2.textContent = 'Thank you for visiting, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading2.textContent = 'Thank you for visiting, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}