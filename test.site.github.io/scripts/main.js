var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/art-tan.png') {
        myImage.setAttribute ('src', 'images/art-tan2.png');
    } else {
        myImage.setAttribute ('src', 'images/art-tan.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');
myButton.onclick = function() {
    setUserName();
}


function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'This just Template, ' + myName; 
} if(!localStorage.getItem('name')) {
        setUserName();
    } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'This just Template, ' + storedName;
    }
