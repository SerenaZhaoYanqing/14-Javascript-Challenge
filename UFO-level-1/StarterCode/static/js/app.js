// from data.js
var tableData = data;

// YOUR CODE HERE!

// Part 1: Using the UFO dataset provided in the form of an array of JavaScript objects
// Write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// get a reference to the table body
var tbody=d3.select ("tbody");
// loop  though data and console each UFO object
data.forEach(function(UFODetails){
    console.log(UFODetails);
// append table row (tr) for each UFO details
    var row = tbody.append("tr");
// use object.entries to console.log each UFO details 
    Object.entries(UFODetails).forEach(function([key, value]) {
        console.log(key, value);
// use D3 to append 1 cell per DFO value( datetime, city, state etc)
    var cell = row.append("td");
// use d3 to update each cell's text with UFO details values 
    cell.text(value);   
});
});


// Use a date form in your HTML document and write JavaScript code that will listen for events and 
//search through the date/time column to find rows that match user input.