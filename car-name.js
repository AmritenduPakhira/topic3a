const showCarNamesButton = document.getElementById('show-car-names-button');
const carNamesTable = document.getElementById('car-names-table');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Loop through the data and create a row for each car name
    data.forEach((car, index) => {
      const row = carNamesTable.insertRow();
      const idCell = row.insertCell(0);
      const nameCell = row.insertCell(1);

      idCell.textContent = index + 1;
      nameCell.textContent = car.name;
    });
  })
  .catch(error => console.error(error));

showCarNamesButton.addEventListener('click', () => {
  showCarNamesButton.style.display = 'none';
  carNamesTable.style.display = 'table';
});
