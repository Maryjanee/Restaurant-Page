
import homeImg from "./images/home.jpg";
import navBar from "./navbar.js";


const header = document.createElement('header');
let headerImg = document.createElement('img');
headerImg.src = homeImg;

let heroTextContainer = document.createElement('div');
heroTextContainer.className = "hero-container text-center";
let heading = document.createElement('h2');
let leadText= document.createElement('p');
leadText.className ="lead uppercase";
let pagePhrase = document.createElement('p');
let ctaBtn = document.createElement('button');

heading.innerText = "Welcome";
leadText.innerText = 'High Quality Meals'
pagePhrase.innerText = "The home of mouth watering delicacies and cuisines made with lots of love"
ctaBtn.innerText = "Book A table";

let heroArray = [heading, leadText, pagePhrase, ctaBtn];

for(let i = 0; i< heroArray.length; i++){
  heroTextContainer.appendChild(heroArray[i]);
}

header.appendChild(headerImg);
header.appendChild(navBar);
header.appendChild(heroTextContainer);


export default header;


