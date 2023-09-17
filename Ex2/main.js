const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */
const alternativeTexts = ['A human green eye', 'A paint of sky', 'Purple flowers', 'An egypt paint', 'A butterfly on a leaft']

/* Looping through images */

for(let i =0; i < 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imageNames[i]}`);
    newImage.setAttribute('alt', alternativeTexts[i]);
    thumbBar.appendChild(newImage);

    newImage.onclick = function($event) {
        const src = $event.target.getAttribute("src");
        setDisplaydImage(src);
    }
}

function setDisplaydImage(src){
    displayedImage.setAttribute('src', src);
}


/* Wiring up the Darken/Lighten button */
btn.onclick = function($event) {
    const btnClass = $event.target.getAttribute("class");
    if(btnClass == "dark"){
        setMode("light", "Lighten", "rgba(0,0,0,0.5)");
    }else{
        setMode("dark", "Darken", "rgba(0,0,0,0)");
    }
}


function setMode(btnClass, textContetn, color){
    btn.setAttribute("class", btnClass);
    btn.textContent = textContetn;
    overlay.style.backgroundColor = color;
}