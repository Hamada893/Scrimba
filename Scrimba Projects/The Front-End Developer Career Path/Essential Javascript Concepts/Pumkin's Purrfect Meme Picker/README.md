# Pumkin's Purrfect Meme Picker

**Pumkin's Purrfect Meme Picker** is a fun web app that allows users to pick and view random cat memes based on their selected emotions. The app fetches a variety of cat images and dynamically displays them based on user preferences.

## Features

- Users can select an emotion from a set of radio buttons.
- The app filters cat images based on the selected emotion.
- A GIF-only filter is available to show only cat memes in GIF format.
- When a cat meme is selected, the app displays the image in a modal with relevant information.

## Technologies Used

### New Concepts I Learned:

- **`for...of` loop**: Used to iterate over arrays like `catsArray` and `emotions`, making it easier to work with elements inside arrays.
  
- **`import` / `export`**: Applied to import the `catsData` from a separate `data.js` file, allowing modularity in the code and better organization.
  
- **Radio and Checkbox Inputs**: I worked with `<input type="radio">` and `<input type="checkbox">` elements to let users select emotions and toggle the GIF-only filter. This included using event listeners like `.addEventListener` to capture user input.
  
- **`querySelector`**: Used for selecting elements based on CSS selectors. For example, selecting the first checked radio button using `document.querySelector('input[type="radio"]:checked')` to retrieve the selected emotion.
  
- **`getElementsByClassName`**: This method was used to select all elements with the `radio` class to apply a highlight effect when a radio button is selected.
  
- **`classList.remove`**: Used to remove CSS classes dynamically. I used this method to remove the `highlight` class from all radio buttons and then added it to the selected radio button.
  
- **`.includes()`**: Utilized to check if an array contains a specific element. For example, checking if a cat's `emotionTags` array includes the selected emotion before adding it to the matching list.
  
- **`.filter()`**: Employed to create a filtered array of cats based on the selected emotion and whether the GIF-only option is checked. This method returned the relevant cat objects based on user input.

## How to Use

1. Open the app in a web browser.
2. Choose an emotion from the available options.
3. Toggle the GIF-only filter if you want to view only GIF cat memes.
4. Click the "Get Meme" button to display a random cat meme based on your selected emotion.
5. The meme will appear in a modal with relevant details.

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pumpkins-purrfect-meme-picker.git
