import headerload from './header';
import loadFooter from './footer';
import loadHome from './home';
import loadMenu from './info';
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
const fetchWeather = async () => {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d917a8125d1d2b9470fefaa25bd2d8e3', { mode: 'cors' });
  const data = await response.json();
  console.log(data);
};
fetchWeather();
const btn = document.querySelector('button');
btn.addEventListener('click', fetchWeather);

const cityName = document.getElementById('city_name').value;
console.log(cityName);
