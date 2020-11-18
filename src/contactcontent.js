import  contactImg from './images/spagettini.jpg';
import  contactBg  from './images/about2.jpg';
import header from './header';
import main  from './maincontent'
import footer  from './footer';



const heroDiv = () => {
  const heroDiv = document.querySelector('header div');
  
   while(heroDiv.firstChild){
    heroDiv.removeChild(heroDiv.firstChild);
  }
   let heading = document.createElement('h2');
 
  let leadText= document.createElement('p');
  let pagePhrase = document.createElement('p');
  let ctaBtn = document.createElement('button');
  heading.innerText = "Contact";
  leadText.innerText = 'Do you want to speak to us?'
   heading.className =  "lead uppercase";
   leadText.className = "spl-text"
  ctaBtn.innerText = "Send a message";

  let heroArray = [heading, leadText,  ctaBtn];

  for(let i = 0; i< heroArray.length; i++){
    heroDiv.appendChild(heroArray[i]);
  }
  return heroDiv
}

const sectionContent = () =>{
  const main = document.querySelector('main');
   while(main.firstChild){
    main.removeChild(main.firstChild);
  }
  const contactItemDiv = document.createElement('div');
 contactItemDiv.id = "contact"
 contactItemDiv.className= "container d-grid"
  const contactImage = document.createElement('img');
  contactImage.src = contactImg;
  contactItemDiv.appendChild(contactImage);
  
  const contactInfoContainer = document.createElement('div');
  contactInfoContainer.className = "contact-info"
  const contactitle = document.createElement('h5');
  contactitle.innerText = "Talk to us";
  const contactText = document.createElement('p');
  contactText.innerText = "Do you have a chat about our meals, have a complaint or need our products.";
   const moreText = document.createElement('p');
  moreText.innerText = "We would absolutely love to hear from you.";
  const phone = document.createElement('p');
  phone.innerText = "+234 123 456 789 0";
  const email = document.createElement('p');
  email.innerText = "hello@emsam.com ";
  
  let contactArr = [contactitle, contactText,moreText, phone, email];

  for(let i = 0; i< contactArr.length; i++){
    contactInfoContainer.appendChild(contactArr[i]);
  }
  contactItemDiv.appendChild(contactInfoContainer);
  
    main.appendChild(contactItemDiv);
    return main
}

 export const contactPage = () =>{
  const img = document.querySelector('header img');;
   img.src = contactImg;
   heroDiv();
   sectionContent();
   
}








