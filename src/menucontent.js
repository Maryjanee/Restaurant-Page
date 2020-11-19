import menuImg from './images/menu.jpg';
import menuOne from './images/pizzarina.jpg';
import menuTwo from './images/fruitfitta.jpg';
import menuThree from './images/pancakes.jpg';
import menuFour from './images/vegetables.jpg';
import header from './header';


const heroDiv = () => {
  const heroDiv = document.querySelector('header div');

  while (heroDiv.firstChild) {
    heroDiv.removeChild(heroDiv.firstChild);
  }
  const heading = document.createElement('h2');

  const leadText = document.createElement('p');
  const pagePhrase = document.createElement('p');
  const ctaBtn = document.createElement('button');
  heading.innerText = 'Menu';
  leadText.innerText = 'High Quality Meals';
  heading.className = 'lead uppercase';
  leadText.className = 'spl-text';
  pagePhrase.innerText = 'Here is a list of our awesome meals and cuisines that make us stand out';
  ctaBtn.innerText = 'Call Us';

  const heroArray = [heading, leadText, pagePhrase, ctaBtn];

  for (let i = 0; i < heroArray.length; i += 1) {
    heroDiv.appendChild(heroArray[i]);
  }
  return heroDiv;
};

const sectionContent = () => {
  const section = document.querySelector('section');

  section.classList.remove('d-grid');

  const menuItems = [{ name: 'Pizzarina', src: menuOne }, { name: 'Fruitfitta', src: menuTwo }, { name: 'Pancake Fiesta', src: menuThree }, { name: 'Vegetables', src: menuFour }];

  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  const menuContainerGrid = document.createElement('div');

  menuContainerGrid.className = 'd-grid menu-container';
  menuItems.forEach((arrayItem) => {
    const menuCard = document.createElement('div');
    const menuImage = document.createElement('img');
    menuImage.src = arrayItem.src;
    const menuTitle = document.createElement('h5');
    menuTitle.innerText = arrayItem.name;
    menuCard.appendChild(menuImage);
    menuCard.appendChild(menuTitle);
    menuContainerGrid.appendChild(menuCard);
  });
  section.appendChild(menuContainerGrid);
  return section;
};

export default function menuPageHeader() {
  const img = document.querySelector('header img');
  img.src = menuImg;
  heroDiv();
  sectionContent();
}
