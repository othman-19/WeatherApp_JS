const content = document.getElementById('content');
function loadContact() {
  content.innerHTML = '';
  const contactHeader = document.createElement('H2');
  contactHeader.innerHTML = 'CONTACT US';
  const email = document.createElement('P');
  email.innerHTML = 'For General Inquiries, please send a message to othmanenaamani@gmail.com.';
  const byPhone = document.createElement('P');
  byPhone.innerHTML = `Have a concern, comment or compliment from a
  recent Weather-City experience? We wouldd like to hear from you.
  By phone: 1-555-555-5555 ,666-666-6666`;
  content.appendChild(contactHeader)
    .appendChild(email)
    .appendChild(byPhone);
  return content;
}
export default loadContact;
