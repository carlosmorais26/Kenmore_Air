document.getElementById('Arrival-passengers-button').addEventListener('click', function() {
    // Aircraft values
    const x = 6702; // Aircraft with fuel + pilot weight
    const z = 692; // Max cargo hold weight
  
    // Generate random number of passengers between 2 and 4
    const numPassengers = Math.floor(Math.random() * 3) + 2;
  
    // Generate random weight for passengers within cargo hold limit
    const maxPassengerWeight = z / 2; // Max weight per passenger
    const totalPassengerWeight = numPassengers * Math.random() * maxPassengerWeight;
  
    // Update input field with generated passengers and their weight
    document.getElementById('Arrival-passengers').value = `${numPassengers} passengers, Total Weight: ${totalPassengerWeight.toFixed(2)} lbs`;
  });
  
  document.getElementById('Outbound-cargo-button').addEventListener('click', function() {
    // Aircraft values
    const x = 6702; // Aircraft with fuel + pilot weight
    const y = 7394; // Max take-off weight
  
    // Get total weight of passengers
    const passengersWeight = parseFloat(document.getElementById('Arrival-passengers').value.split(':')[1].split('lbs')[0]);
  
    // Calculate outbound cargo weight
    const outboundCargoWeight = y - (x + passengersWeight);
  
    // Update input field with generated cargo weight
    document.getElementById('Outbound-cargo').value = `${outboundCargoWeight.toFixed(2)} lbs`;
  });
  