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
  const z = 692; // Max cargo hold weight

  // Generate random number of passengers between 2 and 4
  const numPassengers = Math.floor(Math.random() * 3) + 2;

  // Generate random weight for passengers within cargo hold limit
  let totalPassengerWeight = 0;
  for (let i = 0; i < numPassengers; i++) {
    const passengerWeight = Math.random() * 250; // Max weight per passenger
    if (totalPassengerWeight + passengerWeight <= z) {
      totalPassengerWeight += passengerWeight;
    } else {
      break; // Stop adding passengers if cargo hold limit is reached
    }
  }

  // Update input field with generated passengers and their weight
  document.getElementById('Outbound-passengers').value = `${numPassengers} passengers, Total Weight: ${totalPassengerWeight.toFixed(2)} lbs`;
  });

// end of the creation of a radom number of passengers and their weight

//creation of a radom number of Arrival passengers and their weight

document.getElementById('Arrival-passengers-button').addEventListener('click', function() {
  const z = 692; // Max cargo hold weight

  // Generate random number of passengers between 2 and 4
  const numPassengers = Math.floor(Math.random() * 3) + 2;

  // Generate random weight for passengers within cargo hold limit
  let totalPassengerWeight = 0;
  for (let i = 0; i < numPassengers; i++) {
    const passengerWeight = Math.random() * 250; // Max weight per passenger
    if (totalPassengerWeight + passengerWeight <= z) {
      totalPassengerWeight += passengerWeight;
    } else {
      break; // Stop adding passengers if cargo hold limit is reached
    }
  }

  // Update input field with generated passengers and their weight
  document.getElementById('Arrival-passengers').value = `${numPassengers} passengers, Total Weight: ${totalPassengerWeight.toFixed(2)} lbs`;
});


// end of the creation of a radom number of passengers and their weight

//creation of a radom number of cargo outbound

document.getElementById('Outbound-cargo-button').addEventListener('click', function() {
  const x = 6702; // Aircraft with fuel + pilot weight
  const y = 7394; // Max take off weight

  // Get total weight of passengers
  const passengersWeight = parseFloat(document.getElementById('Arrival-passengers').value.split(':')[1].split('lbs')[0]);

  // Calculate outbound cargo weight
  const outboundCargoWeight = y - (x + passengersWeight);

  // Update input field with generated cargo weight
  document.getElementById('Outbound-cargo').value = `${outboundCargoWeight.toFixed(2)} lbs`;
  });

// end of the creation of a radom number of passengers and their weight

//creation of a radom number of cargo arrival

document.getElementById('Arrival-cargo-button').addEventListener('click', function() {
  const x = 6702; // Aircraft with fuel + pilot weight
  const y = 7394; // Max take off weight

  // Get total weight of passengers
  const passengersWeight = parseFloat(document.getElementById('Arrival-passengers').value.split(':')[1].split('lbs')[0]);

  // Calculate outbound cargo weight
  const ArrivalCargoWeight = y - (x + passengersWeight);

  // Update input field with generated cargo weight
  document.getElementById('Arrival-cargo').value = `${ArrivalCargoWeight.toFixed(2)} lbs`;
});

// end of the creation of a radom number of passengers and their weight
