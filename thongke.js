
var getApi = 'http://localhost:8080/khu/slots';

fetch(getApi)
  .then(response => response.json())
  .then(data => {
    const slots = data.A3.slots;
    const controng = data.A3.slots - data.A3.taken_slots;
    const element = document.getElementById('get1');
    const e1 = document.getElementById('get2');
    element.textContent = slots;
    e1.textContent = controng;
    
  })
  .catch(error => {
    console.error('Error:', error);
  });