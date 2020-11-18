import contactImg from './images/spagettini.jpg';


const heroDiv = () => {
  const heroDiv = document.querySelector('header div');

  while (heroDiv.firstChild) {
    heroDiv.removeChild(heroDiv.firstChild);
  }
  const heading = document.createElement('h2');

  const leadText = document.createElement('p');
  const pagePhrase = document.createElement('p');
  const ctaBtn = document.createElement('button');
  heading.innerText = 'Contact';
  leadText.innerText = 'Do you want to speak to us?';
  heading.className = 'lead uppercase';
  leadText.className = 'spl-text';
  ctaBtn.innerText = 'Send a message';

  const heroArray = [heading, leadText, pagePhrase, ctaBtn];

  for (let i = 0; i < heroArray.length; i += 1) {
    heroDiv.appendChild(heroArray[i]);
  }
  return heroDiv;
};

const sectionContent = () => {
  const main = document.querySelector('main');
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  const contactItemDiv = document.createElement('div');
  contactItemDiv.id = 'contact';
  contactItemDiv.className = 'container d-grid';
  const contactImage = document.createElement('img');
  contactImage.src = contactImg;
  contactItemDiv.appendChild(contactImage);

  const contactInfoContainer = document.createElement('div');
  contactInfoContainer.className = 'contact-info';
  const contactitle = document.createElement('h5');
  contactitle.innerText = 'Talk to us';
  const contactText = document.createElement('p');
  contactText.innerText = 'Do you have a chat about our meals, have a complaint or need our products.';
  const moreText = document.createElement('p');
  moreText.innerText = 'We would absolutely love to hear from you.';
  const phone = document.createElement('p');
  phone.innerText = '+234 123 456 789 0';
  const email = document.createElement('p');
  email.innerText = 'hello@emsam.com ';

  const contactArr = [contactitle, contactText, moreText, phone, email];

  for (let i = 0; i < contactArr.length; i += 1) {
    contactInfoContainer.appendChild(contactArr[i]);
  }
  contactItemDiv.appendChild(contactInfoContainer);

  main.appendChild(contactItemDiv);
  return main;
};

export default function contactPage() {
  const img = document.querySelector('header img');
  img.src = contactImg;
  heroDiv();
  sectionContent();
}
