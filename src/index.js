import "./main.scss"; 
import header from'./header.js';
import main from './maincontent.js'
import footer from './footer.js';
import  menuImg from './images/menu.jpg'
import  homeImg from './images/home.jpg';
import  contactImg from './images/contact.jpg';
import {home} from './homecontent.js'
import  {menuPageHeader} from './menucontent.js'
import  {contactPage} from './contactcontent.js'


const pageContent = document.querySelector('#content');

const homePage = () =>{

  pageContent.appendChild(header);
  pageContent.appendChild(main);
  pageContent.appendChild(footer);
}

 homePage();
  
  
  const homeBtn = document.querySelector('#nav-link-1');
  const menuBtn = document.querySelector('#nav-link-2');
  const contactBtn = document.querySelector('#nav-link-3');

 


  homeBtn.addEventListener('click', ()=>{
    while (pageContent.firstChild){
       pageContent.removeChild(pageContent.firstChild)
    }
    
    homePage();
    
    })

menuBtn.addEventListener('click', () =>{
  
  menuPageHeader();
  

})

contactBtn.addEventListener('click', () => {
  contactPage();
  
})








 

