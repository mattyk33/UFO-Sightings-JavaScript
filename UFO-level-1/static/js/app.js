// from data.js
var tableData = data;

// Write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through each ufo object in the data array
tableData.forEach((ufoObject) => {

	// Append one table row for each ufo object
	var row = tbody.append("tr");

	// Use `Object.entries` and forEach to iterate through keys and values of ufo object
	Object.entries(ufoObject).forEach(([key, value]) => {

		// Append one cell per ufo object value 
		var cell = row.append("td");
        cell.text(value);
    });
});

// Use a date form in your HTML document and write JavaScript code that will listen
// for events and search through the date/time column to find rows that match user input.

// Select the button and form
var button = d3.select("#filter-btn");
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(ufoObject => ufoObject.datetime === inputValue);

    // Clear out current contents in the table
    tbody.html("");
    
    // Loop through each ufo object in the data array
    filteredData.forEach((ufoObject) => {

	// Append one table row for each ufo object
	var row = tbody.append("tr");

	// Use `Object.entries` and forEach to iterate through keys and values of ufo object
	Object.entries(ufoObject).forEach(([key, value]) => {

		// Append one cell per ufo object value 
		var cell = row.append("td");
        cell.text(value);
    });
});
}