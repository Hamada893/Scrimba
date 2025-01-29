/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Get DOM elements
const inputEl = document.querySelector('.number-container');
const convertBtn = document.querySelector('.convert-btn');
const lengthEl = document.querySelector('.length h3');
const volumeEl = document.querySelector('.volume h3');
const massEl = document.querySelector('.mass h3');

// Conversion rates
const METER_TO_FEET = 3.281;
const LITER_TO_GALLON = 0.264;
const KILO_TO_POUND = 2.204;

// Function to round to 3 decimal places
function round(num) {
    return Math.round(num * 1000) / 1000;
}

// Conversion functions
function convertLength(value) {
    const feet = round(value * METER_TO_FEET);
    const meters = round(value / METER_TO_FEET);
    return `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`;
}

function convertVolume(value) {
    const gallons = round(value * LITER_TO_GALLON);
    const liters = round(value / LITER_TO_GALLON);
    return `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`;
}

function convertMass(value) {
    const pounds = round(value * KILO_TO_POUND);
    const kilos = round(value / KILO_TO_POUND);
    return `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`;
}

// Update all conversions
function updateConversions() {
    const value = Number(inputEl.value) || 0;
    
    lengthEl.textContent = convertLength(value);
    volumeEl.textContent = convertVolume(value);
    massEl.textContent = convertMass(value);
}

// Event listeners
convertBtn.addEventListener('click', updateConversions);

// Optional: Update on Enter key press
inputEl.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
      updateConversions();
  }
});

// Initialize with default value
updateConversions();
