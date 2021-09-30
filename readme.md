Moody Kittens
=============

![moody-kittens](moody-logo.png)

> Everyone on the internet should have a experience the joys of owning a cat!

# What I Learned


### CRUD
This was a basic application, but it was a more thorough introduction to the "[create, read, update, delete](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)" process than I previously had experience with. The lighthearted appearance didn't detract from learning how to take user input to create entries into a database, which were then drawn to the page and interacted with. 

### HTML
This CRUD system also pushed me to learn how to programatically manipulate the HTML file, as I needed to draw templates that were pulling from localstorage, as well as pulling external resources for the uniquely generated images. Drawing these kitten templates taught me about interpolation using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). This seems like a very powerful feature that I'm just scratching the surface of. 

### Logic
Another large component of this learning experience was practicing my conditional logic. Many of my bugs were a result of unpolished and faulty conditional logic. Sometimes the logic would be fine, but my syntax would be incorrect, like trying to use logic on properties without defining an object that the property belongs to. There were also bugs where I would invoke a function at the wrong point in the logic, like inside a conditional branch that is only sometimes invoked instead of invoked on each iteration. I believe that all of my logic used if/else statements, and something I might want to change is to instead use [ternary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) to improve readability. 

### Functions
The importance of separating processes into different functions was also reinforced in this project. There were moments where I had multiple things going on in one function and it just got confusing, so I began trying to isolate processes to specific and separate functions. Just because you're going to do one thing right after another doesn't mean they need to be packed into the same function. 

### Scope
Something else that I encountered was the importance of [the scope of variables](https://developer.mozilla.org/en-US/docs/Glossary/Scope). I definitely had some bugs that were caused by misunderstanding a variable's scope. I relate this to proper practice of implementing functions, and understanding the logic of what's going on. 

### CSS
While most of the styling was given to me, there were also times where I practiced CSS. Rules were given, but I had to understand and apply them to the HTML, and I also created some rules for specific jobs. I used [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) so that my text banner didn't overflow on smaller width screens. I also made rules so that pointer events and interaction was limited on certain assets like text and images that don't need to be selected by the user, which I thought made it feel more polished. 

### Conclusion
My code is far from perfect. There's probably redundant actions that I'm missing, there's most certainly places I could make things more efficient or readable. Overall I'm satisfied with what I've accomplished with this project and I'm excited to learn more about JavaScript and web development. 


# The Project 


### Goals
In this application you will build out a fun application that allows users the joys of owning a cat. This app is intended to ensure you as a student have learned the fundamental concepts around web development successfully graduating you out of the beginners bracket.

### The Setup
The basic design and layout for this app has been mocked out and the names of the JavaScript functions have all been created. As the developer you will need to work across HTML, CSS and JavaScript to complete the requirements. In the code you will see several comments intended to be used as help and guidelines on what needs to be accomplished. Once you have achieved the requirements of the app use GitHub to host the page live.

### Requirements

#### Visualization
- Users must have a form where they enter in at minimum the name of a kitten
- A Kitten's name and mood must be visible for the user 
- A custom Google Font must be added
- Kittens are visible when the page reloads
- A Kitten's mood must affect visually the appearance of the kitten

#### Functionality 
- Add Kitten form clears when submitted
- Add Kitten form submission does not reload the page 
- Kittens are stored in local storage. 
- Kittens can be deleted
- Kittens have at least two buttons that affect the kitten's mood in different ways
- Kitten's moods persist through page reloads

### Step by Step Guide

1. Create a form used to add a Kitten
1. Handle the form submission
  - Prevent the page from reloading when submitting the form
  - Pull the form data to get a new kitten and give that kitten an id
  - Add the new kitten to the kittens array
  - Reset the form
  - Save the kittens list
  - Draw the kittens list
1. Handle Page Refresh
  - Load the kittens list
  - Draw the kittens list
