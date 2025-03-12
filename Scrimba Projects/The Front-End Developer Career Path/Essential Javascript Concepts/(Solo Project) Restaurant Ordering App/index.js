import { menuArray } from './data.js';

let menuItems = ``;

// Create the menu items
for (let item of menuArray) {
  menuItems += `
    <div class="menu-item">
        <div class="item-info">
            <p class='item-emoji'>${item.emoji}</p> 
            <div class="item-text">
                <p class='item-name'>${item.name}</p>
                <p class='item-ingredients'>${item.ingredients.join(", ")}</p>  
                <p class='item-price'>$${item.price}</p>  
            </div>
        </div>
        <button id='increment-btn'>+</button>
    </div>
  `;
}

// Inject menuItems into the DOM
document.getElementById("menu").innerHTML = menuItems;

// Define the increment function
function increment() {
  console.log('button clicked!');
}

// Attach event listeners after the menu is rendered
document.querySelectorAll('#increment-btn').forEach(button => {
    button.addEventListener('click', increment);
});
