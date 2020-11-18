
import homeImg from './images/home.jpg';
import navBar from './navbar';


const header = document.createElement('header');
const headerImg = document.createElement('img');
headerImg.src = homeImg;

const heroTextContainer = document.createElement('div');
heroTextContainer.className = 'hero-container text-center';
const heading = document.createElement('h2');
heading.className = 'spl-text';
const leadText = document.createElement('p');
leadText.className = 'lead uppercase';
const pagePhrase = document.createElement('p');
const ctaBtn = document.createElement('button');

heading.innerText = 'Welcome';
leadText.innerText = 'High Quality Meals';
pagePhrase.innerText = 'The home of mouth watering delicacies and cuisines made with lots of love';
ctaBtn.innerText = 'Book A table';

const heroArray = [heading, leadText, pagePhrase, ctaBtn];

for (let i = 0; i < heroArray.length; i += 1) {
  heroTextContainer.appendChild(heroArray[i]);
}

header.appendChild(headerImg);
header.appendChild(navBar);
header.appendChild(heroTextContainer);


export default header;
