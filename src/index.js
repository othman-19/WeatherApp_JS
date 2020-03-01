import headerload from './header';
import loadFooter from './footer';
import { loadHome, addToggle } from './home';
import loadInfo from './info';
import loadContact from './contact';
import './style.css';

const header = headerload();
const home = loadHome();

document.body.appendChild(header);
document.body.appendChild(home);
const dataFields = document.querySelectorAll('.infoSpan');

const navbar = document.getElementById('navBar');
const linksList = navbar.childNodes;
linksList[0].addEventListener('click', loadHome, false);
linksList[1].addEventListener('click', loadInfo, false);
linksList[2].addEventListener('click', loadContact, false);
document.body.appendChild(loadFooter());

const showData = (fields, info) => {
  for (let i = 0; i < 5; i += 1) {
    const field = fields[i];
    if (i === 2) {
      field.innerHTML = `${info[i]} C°`;
    } else {
      field.innerHTML = info[i];
    }
  }
};

const switchTemp = (btn, span) => {
  const spn = span;
  const c = parseInt(dataFields[2].innerText, 10);

  if (btn.checked) {
    spn.innerText = `${(Math.round(c * (9 / 5) + 32))} F°`;
  } else {
    spn.innerText = `${Math.round((c - 32) * (5 / 9))} C°`;
  }
};

const changeStyle = (fields, info) => {
  const mainField = fields[0];
  const iconLink = `http://openweathermap.org/img/w/${info[5]}.png`;
  mainField.insertAdjacentHTML('beforeend', `<img class ="weatherIcon" id = info[5] src = ${iconLink}>`);
  const switchSpan = document.getElementById('switchSpan');
  switchSpan.innerHTML = '';
  switchSpan.appendChild(addToggle());
  document.body.style.backgroundImage = `url('./Wallpaper/${info[1]}.jpg')`;
};
const fetchWeather = async (name) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&APPID=eb8aa7c723aa5fb08232fd43f7f3c0ca`,
      { mode: 'cors' },
    );
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
    changeStyle(dataFields, info);
    const switchBtn = document.getElementById('switchBtn');
    const switchInput = document.getElementById('switchInput');
    switchBtn.addEventListener('change', () => { switchTemp(switchInput, dataFields[2]); }, false);
  });
  e.preventDefault();
});
