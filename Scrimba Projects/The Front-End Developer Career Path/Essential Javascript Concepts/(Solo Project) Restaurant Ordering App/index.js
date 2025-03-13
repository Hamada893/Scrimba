import { menuArray } from './data.js'

const orderMenu = document.getElementById('order-menu')
const menuContainer = document.getElementById('menu')
const cardDetailsModal = document.getElementById('card-details-modal')
const payBtn = document.getElementById('pay-btn')
const thanksMsg = document.getElementById('thanks-msg')

let menuItems = ``
let orderedItems = [] // Store selected items

// Create the menu items dynamically
menuArray.forEach((item, index) => {
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
        <button class='increment-btn' data-index="${index}">+</button>
    </div>
  `
})

// Inject menu items into the DOM
menuContainer.innerHTML = menuItems

// Function to update the order menu
function updateOrderMenu() {
  if (orderedItems.length === 0) {
    orderMenu.style.visibility = 'hidden' // Hide if empty
    return
  }

  let totalPrice = orderedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  
  orderMenu.innerHTML = `
    <p class="order-title">Your Order</p>
    <div class="added-items">
      ${orderedItems.map((item, index) => `
        <div class="item-row">
          <div class="item-name-section">
            <p>${item.name} (x${item.quantity})</p>
            <button class="remove-btn" data-index="${index}">remove</button>
          </div>
          <p>$${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      `).join('')}
    </div>
    <div class="order-total-price">
      <strong>Total: $${totalPrice.toFixed(2)}</strong>
    </div>
    <button class="complete-order-btn">Complete Order</button>
  `

  orderMenu.style.visibility = 'visible' // Show menu when an item is added

  // Attach event listeners to remove buttons
  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', removeItem)
  })

  // Add event listener for "Complete Order" button to show modal
  document.querySelector('.complete-order-btn').addEventListener('click', () => {
    cardDetailsModal.style.visibility = 'visible' // Show modal when order is completed
  })
}

// Function to add or increase quantity of items
function increment(event) {
  const index = event.target.dataset.index
  const existingItem = orderedItems.find(item => item.id === menuArray[index].id)

  if (existingItem) {
    existingItem.quantity++ // Increase quantity instead of adding a duplicate
  } else {
    orderedItems.push({ ...menuArray[index], quantity: 1 }) // Add new item with quantity
  }

  updateOrderMenu()
}

// Function to remove an item
function removeItem(event) {
  const index = event.target.dataset.index
  orderedItems.splice(index, 1) // Remove item from array
  updateOrderMenu()
}

// Attach event listeners to the increment buttons
document.querySelectorAll('.increment-btn').forEach(button => {
  button.addEventListener('click', increment)
})

payBtn.addEventListener('click', function(e){
  e.preventDefault()
  thanksMsg.style.visibility = 'visible'
  cardDetailsModal.style.display = 'none'
  orderMenu.style.display = 'none'
})


