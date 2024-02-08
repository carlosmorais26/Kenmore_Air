// script.js
var flight_list = []
flight_list["Departure"] = []
flight_list["Outbound"] = []
flight_list["Arrival"] = []



function saveFlight() {
    // Get form values
    var flightNumber = document.getElementById('flightNumber').value;
    var departureDate = document.getElementById('departureDate').value;

    // Create a new row in the table
    var table = document.getElementById('flightTable');
    var newRow = table.insertRow(table.rows.length);

    // Insert data into the new row
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = flightNumber;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = departureDate;

    // Add more cells as needed for additional form fields

    // Clear the form fields
    document.getElementById('flightForm').reset();
}