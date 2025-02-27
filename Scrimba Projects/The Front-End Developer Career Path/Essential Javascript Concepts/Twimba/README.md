# Twimba

This project is a simple implementation of a Twitter-like feed that allows users to post tweets, like, retweet, and reply to others. The project utilizes HTML, CSS, and JavaScript, and incorporates several new concepts that were learned throughout the development process.

## Concepts Learned

### 1. **Textarea**
The `<textarea>` HTML element is used to create a multi-line text input field, allowing users to enter text over multiple lines. In this project, the `<textarea>` is used for the tweet input, where users can type their tweet content before posting.

Example:
```html
<textarea id="tweet-input" placeholder="What's happening?"></textarea>
```

### 2. **forEach**
The `forEach()` method in JavaScript is used to iterate over elements in an array or a NodeList. In this project, `forEach()` is used to loop over the tweetsData array and display each tweet on the page, as well as to loop through replies within a tweet.

Example:
```javascript
tweetsData.forEach(function(tweet) {
    // Code to display each tweet
});
```

### 3. **Data Attributes**
HTML data attributes allow us to store extra information on elements that can be accessed via JavaScript. In this project, data attributes are used to track tweet IDs for interactions like liking, retweeting, and replying.

Example:
```html
<i class="fa-solid fa-heart" data-like="${tweet.uuid}"></i>
```

You can access these attributes in JavaScript like this:
```javascript
const tweetId = e.target.dataset.like;
```

### 4. **Conditionally Render Styles**
Conditionally rendering styles means dynamically changing an element's appearance based on a condition. In this project, the heart (like) and retweet icons change their appearance depending on whether the tweet has been liked or retweeted.

Example:
```javascript
let likeIconClass = tweet.isLiked ? 'liked' : '';
let retweetIconClass = tweet.isRetweeted ? 'retweeted' : '';
```

### 5. **Logical NOT Operator**
The logical NOT operator (`!`) is used to invert a boolean value. In this project, it is used to toggle between the liked and retweeted states when the user interacts with a tweet.

Example:
```javascript
targetTweetObj.isLiked = !targetTweetObj.isLiked;
```

### 6. **CDNs (Content Delivery Networks)**
A CDN is a system of distributed servers that deliver web content to users based on their geographic location. In this project, a CDN is used to include external libraries like Font Awesome icons.

Example:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
```

### 7. **Font Awesome**
Font Awesome is a library of vector icons and social logos. In this project, Font Awesome is used to display icons for interactions like commenting, liking, and retweeting tweets.

Example:
```html
<i class="fa-solid fa-heart"></i>
```

### 8. **Generate UUIDs using uuidjs**
UUID (Universally Unique Identifier) is a 128-bit identifier that is globally unique. In this project, we use the uuid library to generate unique identifiers for each tweet.

Example:
```javascript
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const tweetId = uuidv4();
```

## General Project Explanation
The project simulates a social media feed, similar to Twitter, where users can post tweets, like, retweet, and reply to other tweets. It features the following functionality:

- Post a tweet: Users can enter a message in the text area and post it to the feed.
- Like a tweet: Users can like tweets, which changes the heart icon's style.
- Retweet a tweet: Users can retweet, which changes the retweet icon's style.
- Reply to a tweet: Users can toggle the visibility of replies for each tweet.

The app's state is managed using an array, `tweetsData`, where each tweet is stored as an object. The state is rendered dynamically to the page based on the interactions.

The use of data attributes enables efficient interaction with elements, and the use of external libraries like Font Awesome and the uuid library adds functionality and style to the app.

## Installation
1. Clone the repository.
2. Open index.html in your browser to run the project.
3. Ensure you have an internet connection to load external libraries like Font Awesome and the UUID library from the CDN.

## License
This project is open-source and available under the MIT License.
