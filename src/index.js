import './main.scss';
import header from './header';
import main from './maincontent';
import footer from './footer';
import menuPageHeader from './menucontent';
import contactPage from './contactcontent';


const pageContent = document.querySelector('#content');

const homePage = () => {
  pageContent.appendChild(header);
  pageContent.appendChild(main);
  pageContent.appendChild(footer);
};

homePage();


const homeBtn = document.querySelector('#nav-link-1');
const menuBtn = document.querySelector('#nav-link-2');
const contactBtn = document.querySelector('#nav-link-3');


homeBtn.addEventListener('click', () => {
  while (pageContent.firstChild) {
    pageContent.removeChild(pageContent.firstChild);
  }
homePage();
});

contactBtn.addEventListener('click', () => {
  contactPage();
});

menuBtn.addEventListener('click', () => {
  menuPageHeader();
});


