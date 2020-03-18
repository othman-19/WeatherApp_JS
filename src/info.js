const content = document.getElementById('content');
function loadInfo() {
  content.innerHTML = '';
  const infoMenu = document.createElement('UL');
  infoMenu.setAttribute('id', 'menu');
  for (let i = 0; i < 5; i += 1) {
    const info = document.createElement('li');
    info.setAttribute('id', `info ${i}`);
    infoMenu.appendChild(info);
  }
  const infoList = infoMenu.children;
  infoList[0].innerHTML = 'Features to be added';
  content.appendChild(infoMenu);
  return content;
}
export default loadInfo;
