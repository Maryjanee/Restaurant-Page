
import homeImg from "./images/home.jpg";
import navBar from "./navbar.js";


const header = document.createElement('header');
let headerImg = document.createElement('img');
headerImg.src = homeImg;
header.appendChild(headerImg);
header.appendChild(navBar);


export default header;


