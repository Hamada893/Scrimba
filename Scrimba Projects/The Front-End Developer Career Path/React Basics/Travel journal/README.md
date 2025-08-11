# 🌏 Travel Journal

A simple React app that displays travel destinations in a clean, card-style layout. Each entry includes an image, location, Google Maps link, travel dates, and a short description.

---

## 📚 What We Learned

1. **Why reusability is important**  
   We explored how reusable components make our code more maintainable, scalable, and easier to read.

2. **Props**  
   We used props to pass dynamic data (like images, titles, and descriptions) into our components, allowing them to be reused for multiple destinations.

3. **Creating components from an array of data**  
   We mapped over an imported array of travel destinations to automatically generate `<Entry />` components, making it simple to add or remove locations without touching the main layout.

---

## 🛠️ Tech Stack
- **React**
- **JavaScript (ES6)**
- **CSS**

---

## 🚀 How It Works

1. Import destination data from a `data.js` file.
2. Use `.map()` to iterate over the array and render an `<Entry />` component for each location.
3. Pass each destination’s details via props for dynamic rendering.
