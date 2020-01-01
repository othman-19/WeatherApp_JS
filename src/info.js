const content = document.getElementById('content');
function loadInfo() {
  content.innerHTML = '';
  const infoMenu = document.createElement('UL');
  infoMenu.setAttribute('id', 'menu');
  for (let i = 0; i < 10; i += 1) {
    const info = document.createElement('li');
    info.setAttribute('id', `info ${i}`);
    infoMenu.appendChild(info);
  }
  const infoList = infoMenu.children;
  infoList[0].innerHTML = 'Feature to be added in future';
  infoList[1].innerHTML = 'Feature to be added in future';
  infoList[2].innerHTML = 'Feature to be added in future';
  infoList[3].innerHTML = 'Feature to be added in future';
  content.appendChild(infoMenu);
  return content;
}
export default loadInfo;
