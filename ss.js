// Parse URL parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const carName = urlParams.get('carName');
const speed = urlParams.get('speed');
const oil = urlParams.get('oil');
const photo = urlParams.get('photo');
const color = urlParams.get('color');
const price = urlParams.get('price');



// Populate HTML elements with retrieved data
document.getElementById('car-name').textContent = carName;
document.getElementById('price').textContent = price;
document.getElementById('speed').textContent = speed;
document.getElementById('oil').textContent = oil;
document.getElementById('car-photo').src = photo;
document.getElementById('color').textContent = color;
