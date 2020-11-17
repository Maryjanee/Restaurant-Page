import imageOne from './images/about2.jpg';
import imageTwo from './images/fruitfitta.jpg';

const appendChildren = (parent,arr) =>{
  for(let i = 0; i< arr.length; i++){
    parent.appendChild(arr[i]);
  }
  return parent
}


const main = document.createElement('main');


const section = document.createElement('section');
section.id = "about";
section.className = "container d-grid ";



const aboutImgContainer = document.createElement('div');
aboutImgContainer.className = 'about-img'
const aboutImg = document.createElement('img');
aboutImg.src = imageOne;
aboutImgContainer.appendChild(aboutImg)



const aboutInfo = document.createElement('div');
aboutInfo.className = "text-center abt-info ";
const aboutTitle = document.createElement('h3');
aboutTitle.className = "spl-text";
const aboutPhrase = document.createElement('p');
const aboutText = document.createElement('p');
aboutText.className = "about-text"
const aboutBtn = document.createElement('button');

aboutTitle.innerText = "About Us";

aboutPhrase.innerText = "We make the best dishes with an added spice of love in ever dish";

aboutText.innerText = "Welcome to Emsam’s, the celebrated Caribbean oasis with two locations in the heart of Lagos, and international outposts in Negril, Jamaica and Dubai, U.A.E. The  Emsam's family includes a lively Jamaican style Diner & Juice Bar and a Caribbean Rum Bar & Jerk Shack. The island connection runs deep at Emsam through its modern approach to classic Jamaican cooking, friendly and cool-as-can-be staff, and vibrant and colorful atmosphere.";

aboutBtn.innerText = "Learn More";
aboutBtn.className = "about-btn";
const aboutInfoArr = [ aboutTitle, aboutPhrase, aboutText, aboutBtn];

appendChildren(aboutInfo, aboutInfoArr);

const aboutImgContainer2 = document.createElement('div');
aboutImgContainer2.className = 'about-img about-img2'
const aboutImg2 = document.createElement('img');
aboutImg2.src = imageTwo;
aboutImgContainer2.appendChild(aboutImg2);

const sectionArr = [aboutImgContainer,aboutImgContainer2,aboutInfo];

appendChildren(section,sectionArr);

main.appendChild(section)

export default main;











 




