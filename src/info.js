const content = document.getElementById('content');
function loadMenu() {
  content.innerHTML = '';
  const menu = document.createElement('UL');
  menu.setAttribute('id', 'menu');
  for (let i = 0; i < 10; i += 1) {
    const pizza = document.createElement('li');
    pizza.setAttribute('id', `pizza ${i}`);
    menu.appendChild(pizza);
  }
  const menuList = menu.children;
  menuList[0].innerHTML = 'THE BIG MARGHERITA';
  menuList[1].innerHTML = 'THE BIG PHILLY CHEESE STEAK';
  menuList[2].innerHTML = 'THE BIG CHEESE';
  menuList[3].innerHTML = 'THE BIG PEPPERONI';
  menuList[4].innerHTML = 'THE BIG HAM & PINEAPPLE';
  menuList[5].innerHTML = 'THE BIG PEPPERONI, SAUSAGE & MUSHROOM';
  menuList[6].innerHTML = 'THE BIG THREE MEATS';
  menuList[7].innerHTML = 'REEF, STEAK & BACON';
  menuList[8].innerHTML = 'GARLIC CHICKEN & BACON RANCH';
  menuList[9].innerHTML = 'CHICKEN, BACON & AVOCADO.';
  content.appendChild(menu);
  return content;
}
export default loadMenu;
