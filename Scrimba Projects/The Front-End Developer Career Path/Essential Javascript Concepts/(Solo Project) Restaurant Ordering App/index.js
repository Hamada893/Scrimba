import {menuArray} from './data.js'

const [{name, emoji, ingredients, price}] = menuArray

console.log(menuArray);
let menuItems = ``

for (let item of menuArray) {
  menuItems += `
  <div class='food-items-container'>
        <p class='item-name'>${item.name}</p>
        <p class='item-emoji'>${item.emoji}</p>
        <p class='item-ingredients'>${item.ingredients.join(", ")}</p>  
        <p class=''>$${item.price}</p>  
        <button onclick='increment()' class='increment-btn'>+</button>
    </div> 
  `
}

document.getElementById("menu").innerHTML = menuItems;
