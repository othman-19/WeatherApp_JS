const headerTemp = document.getElementById('headerTemp');

function loadHeader() {
  const header = document.createElement('HEADER');
  header.setAttribute('class', 'container');
  const logo = document.createElement('H1');
  logo.setAttribute('id', 'logo');
  logo.innerHTML = 'Weather-City';
  header.appendChild(logo);
  const navbar = document.createElement('NAV');
  navbar.setAttribute('id', 'navBar');
  for (let i = 0; i < 3; i += 1) {
    const link = document.createElement('A');
    link.setAttribute('id', `link ${i}`);
    navbar.appendChild(link);
  }
  const linksList = navbar.children;
  linksList[0].innerHTML = 'HOME  |';
  linksList[1].innerHTML = '  INFO  |';
  linksList[2].innerHTML = '  CONTACT';
  header.appendChild(navbar);
  headerTemp.appendChild(header);
  return headerTemp;
}

export default loadHeader;
