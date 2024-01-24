//creation of a radom outbound 
document.getElementById('Outbound-button').addEventListener('click', function() {
    // Get the select element
    var selectElement = document.getElementById('Outbound');
  
    // Generate a random number between 1 and 15
    var randomValue = Math.floor(Math.random() * 15) + 1;
  
    // Set the selected option based on the random value
    selectElement.value = randomValue;
  
    // If you want to trigger the change event manually, uncomment the following line
     selectElement.dispatchEvent(new Event('change'));
  });
// end of the creation of a radom outbound 

//creation of a radom arrival
    document.getElementById('Arrival-button').addEventListener('click', function() {
        // Get the select element
        var selectElement = document.getElementById('Arrival');
      
        // Generate a random number between 1 and 15
        var randomValue = Math.floor(Math.random() * 15) + 1;
      
        // Set the selected option based on the random value
        selectElement.value = randomValue;
      
        // If you want to trigger the change event manually, uncomment the following line
         selectElement.dispatchEvent(new Event('change'));
      });
// end of the creation of a radom arrival 

//creation of a radom number of outbound passengers and their weight

document.getElementById('Outbound-passengers-button').addEventListener('click', function() {
    // Get the input element
    var passengersInput = document.getElementById('Outbound-passengers');
  
    // Generate a random number of passengers between 1 and 4
    var numPassengers = Math.floor(Math.random() * 3 ) + 2;
  
    // Generate a string to store passenger information
    var passengersString = "";
  
    // Populate the string with random weights for each passenger
    for (var i = 0; i < numPassengers; i++) {
      var randomWeight = Math.floor(Math.random() * 200) + 50; // Assuming weights between 50 and 250 pounds
      passengersString += "Passenger " + (i + 1) + ": " + randomWeight + " LBS;\n";
    }
  
    // Set the input value to the generated passengers and weights
    passengersInput.value = passengersString.trim(); // Trim to remove extra newline at the end
  });

// end of the creation of a radom number of passengers and their weight

//creation of a radom number of Arrival passengers and their weight

document.getElementById('Arrival-passengers-button').addEventListener('click', function() {
  // Get the input element
  var passengersInput = document.getElementById('Arrival-passengers');

  // Generate a random number of passengers between 1 and 4
  var numPassengers = Math.floor(Math.random() * 3 ) + 2;

  // Generate a string to store passenger information
  var passengersString = "";

  // Populate the string with random weights for each passenger
  for (var i = 0; i < numPassengers; i++) {
    var randomWeight = Math.floor(Math.random() * 200) + 50; // Assuming weights between 50 and 250 pounds
    passengersString += "Passenger " + (i + 1) + ": " + randomWeight + " LBS;\n";
  }

  // Set the input value to the generated passengers and weights
  passengersInput.value = passengersString.trim(); // Trim to remove extra newline at the end
});

// end of the creation of a radom number of passengers and their weight

//creation of a radom number of cargo outbound

document.getElementById('Outbound-cargo-button').addEventListener('click', function() {
    // Get the input element
    var cargoInput = document.getElementById('Outbound-cargo');
  
    // Generate a random number for cargo pounds between 1 and 500 (you can adjust the range as needed)
    var randomCargoPounds = Math.floor(Math.random() * 500) + 1;
  
    // Set the input value to the generated cargo pounds
    cargoInput.value = randomCargoPounds + ' LBS';
  });

// end of the creation of a radom number of passengers and their weight

//creation of a radom number of cargo arrival

document.getElementById('Arrival-cargo-button').addEventListener('click', function() {
  // Get the input element
  var cargoInput = document.getElementById('Arrival-cargo');

  // Generate a random number for cargo pounds between 1 and 500 (you can adjust the range as needed)
  var randomCargoPounds = Math.floor(Math.random() * 500) + 1;

  // Set the input value to the generated cargo pounds
  cargoInput.value = randomCargoPounds + ' LBS';
});

// end of the creation of a radom number of passengers and their weight
