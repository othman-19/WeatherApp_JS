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

const fetchWeather = async (name) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=d917a8125d1d2b9470fefaa25bd2d8e3`, { mode: 'cors' });
    const data = await response.json();
    const weatherStatus = data.weather[0].main;
    const hum = data.main.humidity;
    const temperature = data.main.temp;
    const windSpeed = data.wind.speed;
    const city = data.name;
    const dataArr = [city, weatherStatus, temperature, hum, windSpeed];
    console.log(dataArr);
    return dataArr;
  } catch (error) {
    return ('error');
  }
};


const showData = (fields, info) => {
  for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];
    field.innerHTML = info[i];
  }
};

const dataFields = document.querySelectorAll('li');
const btn = document.getElementById('submitBtn');
btn.addEventListener('click', (e) => {
  const cityName = document.getElementById('city_name').value;
  fetchWeather(cityName).then((result) => {
    console.log(result);
    showData(dataFields, result);
  });
  e.preventDefault();
});
