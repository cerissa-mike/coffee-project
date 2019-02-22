"use strict";

function renderCoffee(coffee) {
    var html = '<div class="col-12 col-lg-6 d-flex">' + "<h3>" + coffee.name + "</h3>" + coffee.roast + '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

function iterateThroughCoffees(e) {
    var html = '';
    for (var i = 0; i < coffees.length; i++)
        if (coffees[i].name.includes(coffeeSelect.value)) {
            html += renderCoffee(coffees[i]);
        }
    coffeeList.innerHTML = html;
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var coffeeList = document.querySelector('#coffees');
var coffeeSelect = document.getElementById('coffee-select');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

coffeeList.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees, false);
coffeeSelect.addEventListener('keyup', iterateThroughCoffees, false);

