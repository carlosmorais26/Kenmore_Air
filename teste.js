// Generate a random number between 1 and 15 excluding the selected departure
function getRandomValue(exclude) {
  let randomValue;
  do {
      randomValue = Math.floor(Math.random() * 15) + 1;
  } while (randomValue === exclude);
  return randomValue;
}

document.getElementById('Outbound-button').addEventListener('click', function() {
  // Get the select element
  var selectElement = document.getElementById('Outbound');

  // Get the selected departure
  var departureValue = parseInt(document.getElementById('Departure').value);

  // Generate a random number excluding the selected departure
  var randomValue = getRandomValue(departureValue);

  // Set the selected option based on the random value
  selectElement.value = randomValue;

  // If you want to trigger the change event manually, uncomment the following line
  selectElement.dispatchEvent(new Event('change'));
});

document.getElementById('Arrival-button').addEventListener('click', function() {
  // Get the select element
  var selectElement = document.getElementById('Arrival');

  // Get the selected departure and outbound
  var departureValue = parseInt(document.getElementById('Departure').value);
  var outboundValue = parseInt(document.getElementById('Outbound').value);

  // Generate a random number excluding the selected departure and outbound
  var randomValue;
  do {
      randomValue = Math.floor(Math.random() * 15) + 1;
  } while (randomValue === departureValue || randomValue === outboundValue);

  // Set the selected option based on the random value
  selectElement.value = randomValue;

  // If you want to trigger the change event manually, uncomment the following line
  selectElement.dispatchEvent(new Event('change'));
});
