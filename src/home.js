const content = document.getElementById('content');
const temp = document.getElementById('temp');


function addForm() {
  const form = temp.content.cloneNode(true);
  return form;
}

function loadHome() {
  content.innerHTML = '';
  content.appendChild(addForm());
  const infoList = document.createElement('UL');
  infoList.setAttribute('id', 'infoList');
  for (let i = 0; i < 5; i += 1) {
    const item = document.createElement('li');
    item.setAttribute('id', `item-${i}`);
    infoList.appendChild(item);
  }
  const activityList = infoList.children;
  activityList[0].innerText = 'City: ';
  activityList[0].insertAdjacentHTML('beforeend', '<span class ="infoSpan"></span>');
  activityList[1].innerText = 'Main: ';
  activityList[1].insertAdjacentHTML('beforeend', '<span class ="infoSpan"></span>');
  activityList[2].innerText = 'Temperator: ';
  activityList[2].insertAdjacentHTML('beforeend', '<span class ="infoSpan"></span>');
  activityList[3].innerText = 'Humidity: ';
  activityList[3].insertAdjacentHTML('beforeend', '<span class ="infoSpan"></span>');
  activityList[4].innerText = 'WindSpeed: ';
  activityList[4].insertAdjacentHTML('beforeend', '<span class ="infoSpan"></span>');
  content.appendChild(infoList);
  return content;
}

export default loadHome;
