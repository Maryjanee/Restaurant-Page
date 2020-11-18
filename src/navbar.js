const navBar = document.createElement('nav');
navBar.className = 'd-flex jc-space-between ac-center';
const brandName = document.createElement('h1');
brandName.innerText = 'Emsam';
navBar.appendChild(brandName);
const ul = document.createElement('ul');
ul.className = 'd-flex';
const navText = ['Home', 'Menu', 'Contact'];
for (let i = 1; i <= 3; i += 1) {
  const li = document.createElement('li');
  li.className = 'nav-links ';
  li.id = `nav-link-${i}`;
  li.innerText = navText[i - 1];
  ul.appendChild(li);
}
navBar.appendChild(ul);
export default navBar;
