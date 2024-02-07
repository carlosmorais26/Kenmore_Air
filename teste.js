document.getElementById('Arrival-passengers-button').addEventListener('click', function() {
      
    // Generate random weight for passengers within cargo hold limit of 692lbs
const maxPassengerWeight = 250; // Max weight per passenger
let totalPassengerWeight = 0;

// Generate passenger weights until total passenger weight is within cargo hold limit
for (let i = 0; i < numPassengers; i++) {
  const passengerWeight = Math.random() * maxPassengerWeight;
  if (totalPassengerWeight + passengerWeight <= z) {
    totalPassengerWeight += passengerWeight;
  } else {
    break; // Stop adding passengers if cargo hold limit is reached
  }
}

// Update input field with generated passengers and their weight
document.getElementById('Arrival-passengers').value = `${i} passengers, Total Weight: ${totalPassengerWeight.toFixed(2)} lbs`;
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
  