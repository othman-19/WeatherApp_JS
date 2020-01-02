import headerload from './header';
import loadFooter from './footer';
import loadHome from './home';
import loadInfo from './info';
import loadContact from './contact';
import './style.css';

document.body.appendChild(headerload());
document.body.appendChild(loadHome());

const navbar = document.getElementById('navBar');
const linksList = navbar.childNodes;
linksList[0].addEventListener('click', loadHome, false);
linksList[1].addEventListener('click', loadInfo, false);
linksList[2].addEventListener('click', loadContact, false);
document.body.appendChild(loadFooter());

const showData = (fields, info) => {
  for (let i = 0; i < 5; i += 1) {
    const field = fields[i];
    field.innerHTML = info[i];
  }
  const mainField = fields[0];
  const iconLink = `http://openweathermap.org/img/w/${info[5]}.png`;
  mainField.insertAdjacentHTML('beforeend', `<img class ="weatherIcon" id = info[5] src = ${iconLink}>`);
  document.body.style.backgroundImage = `url('./Wallpaper/${info[1]}.jpg')`;
};

const dataFields = document.querySelectorAll('.infoSpan');

const fetchWeather = async (name) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&APPID=d917a8125d1d2b9470fefaa25bd2d8e3`, { mode: 'cors' });
    const data = await response.json();
    const weatherStatus = data.weather[0].main;
    const iconId = data.weather[0].icon;
    const hum = data.main.humidity;
    const temperature = data.main.temp;
    const windSpeed = data.wind.speed;
    const city = data.name;
    const dataArr = [city, weatherStatus, temperature, hum, windSpeed, iconId];
    return dataArr;
  } catch (error) {
    showData(dataFields, 'error');
    return error;
  }
};
const btn = document.getElementById('submitBtn');
btn.addEventListener('click', (e) => {
  const cityName = document.getElementById('city_name').value;
  fetchWeather(cityName).then((info) => {
    showData(dataFields, info);
  });
  e.preventDefault();
});
