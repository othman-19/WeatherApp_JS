const content = document.getElementById('content');
const temp = document.getElementById('temp');


function addForm() {
  const form = temp.content.cloneNode(true);
  return form;
}

function loadHome() {
  content.innerHTML = '';
  content.appendChild(addForm());
  const activities = document.createElement('UL');
  activities.setAttribute('id', 'activities');
  for (let i = 0; i < 5; i += 1) {
    const item = document.createElement('li');
    item.setAttribute('id', `activity-${i}`);
    activities.appendChild(item);
  }
  const activityList = activities.children;
  activityList[0].innerHTML = 'obj';
  activityList[1].innerHTML = 'Front end pizza party.';
  activityList[2].innerHTML = 'Back end pizza party.';
  activityList[3].innerHTML = 'Full stack pizza party.';
  activityList[4].innerHTML = 'Microverse pizza party.';
  content.appendChild(activities);
  return content;
}

export default loadHome;
