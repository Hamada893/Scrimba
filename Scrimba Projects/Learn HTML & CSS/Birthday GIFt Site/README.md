# GIFt Project

## Overview
The **GIFt Project** is a fun and interactive HTML/CSS-based website built as part of the Scrimba "Learn HTML/CSS" course. The website showcases various modern CSS and HTML properties while delivering a unique concept: a digital gift for someone special. The website features virtual "hover gifts" that reveal funny GIFs when hovered over, making it an engaging and delightful experience for the recipient.

## Features
This project incorporates the following features and techniques:

1. **Hover Effects**: Interactive hover states that transform virtual gifts to reveal hidden GIFs.
2. **Flexbox Layouts**:
   - **Rows**: To organize the virtual gifts in a clean and responsive layout.
   - **Columns**: For structuring individual gift elements vertically.
3. **CSS Gradients**: Beautiful gradient backgrounds for the website to enhance visual appeal.
4. **Responsive Design**: Ensuring the website is accessible and visually appealing across various screen sizes.
5. **Custom Fonts and Styling**: Adding personality and style to the design using custom fonts and CSS rules.

## Project Structure
```
project-directory/
|
|-- index.html          # Main HTML file
|-- styles.css          # Main CSS file
|-- images/             # Contains static images and icons
|-- gifs/               # Contains the funny GIFs for the gifts
|-- README.md           # Project documentation (this file)
```

## How It Works
1. The website displays 4-5 virtual "gifts," styled as colorful boxes with playful designs.
2. When a user hovers over a gift box, a hidden GIF is revealed, creating a fun surprise effect.
3. The layout is powered by **flexbox**, ensuring that the gifts are evenly distributed and responsive to different screen sizes.

## Technologies Used
- **HTML5**
- **CSS3**
- **Flexbox** for layout design.
- **CSS Gradients** for backgrounds.
- **Hover Effects** for interactivity.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gift-project.git
   ```
2. Open `index.html` in your favorite browser.

## Usage
- Navigate to the website and explore the gift boxes.
- Hover over each gift to reveal the hidden funny GIFs.

## Key CSS Properties Demonstrated
1. **`hover`**:
   ```css
   .gift:hover {
       transform: scale(1.1);
       background-color: #f0c420;
   }
   ```
2. **Flexbox**:
   ```css
   .gift-container {
       display: flex;
       justify-content: space-around;
       align-items: center;
   }
   ```
3. **Gradients**:
   ```css
   body {
       background: linear-gradient(to right, #ff7e5f, #feb47b);
   }
   ```
4. **Background Images**:
   ```css
   .gift {
       background-image: url("images/gift-box.png");
       background-size: cover;
   }
   ```

## Acknowledgments
This project was built as part of the **Scrimba Learn HTML/CSS course**. Special thanks to the Scrimba team for their excellent tutorials and guidance.

## License
This project is open-source and available under the [MIT License](LICENSE).

