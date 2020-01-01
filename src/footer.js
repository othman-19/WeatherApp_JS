const footer = document.getElementById('footer');

function loadFooter() {
  const note = document.createElement('P');
  note.innerHTML = 'The Weather-City App gives you information every day 24/24';
  const copyright = document.createElement('P');
  copyright.innerHTML = '&copy; By Othmane Namani, 2019, github:othman-19';
  footer.appendChild(note).appendChild(copyright);
  return footer;
}

export default loadFooter;
