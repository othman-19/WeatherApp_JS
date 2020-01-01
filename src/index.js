import headerload from './header';
import loadFooter from './footer';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';

document.body.appendChild(headerload());
document.body.appendChild(loadHome());

const navbar = document.getElementById('navBar');
const linksList = navbar.childNodes;
linksList[0].addEventListener('click', loadHome, false);
linksList[1].addEventListener('click', loadMenu, false);
linksList[2].addEventListener('click', loadContact, false);
document.body.appendChild(loadFooter());
