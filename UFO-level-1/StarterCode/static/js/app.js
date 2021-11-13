// Part I 
// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// from data.js
var tableData = data;
// get a reference to the table body
var tbody=d3.select ("tbody");

// define arrow function on buildtable (arrow)--14.3.(3) activity (we need to reuse it later when displaying results)
function buildtable(i) {
    tbody.text("")

    i.forEach(function (UFODetails) {
//append table row (tr) for each UFO details
        row = tbody.append("tr")
// use object.entries to console.log each UFO details 
        Object.entries(UFODetails).forEach(function ([key, value]) {
            cell = row.append("td").text(value)
        });
    });
}
// call the function to build the full table with all UFO details 
buildtable(tableData)

// Part II
//Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

// assign the data from data.js to a descriptive variable UFOData
var UFOData = data;

// select the button, the filter table button id is "filter-btn"
var button = d3.select("#filter-btn")

// create event handlers
button.on ("click", runEnter);

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime")

// filter data with user input date
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(UFOData);

    //create a new filtered table showing only the filterd data
    var filterUFOdate = UFOData.filter(UFOData => UFOData.datetime === inputValue);

    //display the new filtered results in a table format, call the buildtable function
    buildtable(filterUFOdate);
};

