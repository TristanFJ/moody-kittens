/**
 * Stores the list of kittens
 * @type {Kitten[]}
 */
let kittens = [];
/**
 * Called when submitting the new Kitten Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * you can use robohash for images
 * https://robohash.org/<INSERTCATNAMEHERE>?set=set4
 * then add that data to the kittens list.
 * Then reset the form
 */

function getAffection() {
  return Math.floor((Math.random() * 10) + 4); // return random affection 4 through 10
}

function addKitten(event) {
  event.preventDefault()
  let form = event.target
  let catName = form.catName.value
  let id = catName + "-" + generateId()
  let catPic = "https://robohash.org/" + id + "?set=set4";
  let affection = getAffection()
  newCat = kittens.find(cat => cat.name == catName)

  let mood = setKittenMood()
  /*
  Uncaught TypeError: newCat is undefined
    setKittenMood http://127.0.0.1:5500/app.js:127
    addKitten http://127.0.0.1:5500/app.js:28
    onsubmit http://127.0.0.1:5500/:1
  */

  newCat = {
    id: id,
    name: catName,
    pic: catPic,
    affection: affection,
    mood: mood, 
  }

  kittens.push(newCat)
  saveKittens()
  form.reset()
  drawKittens()
}

/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens
 */
function saveKittens() {
  window.localStorage.setItem("kittens", JSON.stringify(kittens));
}

/**
 * Attempts to retrieve the kittens string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the kittens array to the retrieved array
 */
function loadKittens() {
  let KittensData = JSON.parse(window.localStorage.getItem("kittens"));
  if (KittensData) {
    kittens = KittensData
  }
}

/**
 * Draw all of the kittens to the kittens element
 */
function drawKittens() {
  let template = ""
  kittens.forEach(newCat => {
    template += `
    <div class="card kitten no-interact">
    <img src="${newCat.pic}">
    <h2 class="p-1">Name: ${newCat.name}</h2>
    <h2 class="p-1">Love: ${newCat.affection}</h2>
    <h2 class="p-1">Mood: ${newCat.mood}</h2>
    </div>
    <br>
    `
  })
  document.getElementById("kittens").innerHTML = template
}

/**
 * Find the kitten in the array by its id
 * @param {string} id
 * @return {Kitten}
 */
function findKittenById(id) {
  return kittens.find(k => k.id == id);
}

/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .7
 * increase the kittens affection
 * otherwise decrease the affection
 * save the kittens
 * @param {string} id
 */
function pet(id) {

}

/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant
 * Set the kitten's affection to 5
 * save the kittens
 * @param {string} id
 */
function catnip(id) {
let index = kittens.findIndex(cat => cat.id === id);


saveKittens()
drawKittens()
}

/**
 * Sets the kittens mood based on its affection
 * Happy > 6, Tolerant <= 5, Angry <= 3, Gone <= 0
 * @param {Kitten} kitten
 */
function setKittenMood(newCat) {
if (newCat.affection > 6){newCat.mood = "Happy"}
else if (newCat.affection <= 5){newCat.mood = "Tolerant"}
else if (newCat.affection <= 3){newCat.mood = "Angry"}
else if (newCat.affection <= 0){newCat.mood = "Gone"}
}

let header = document.getElementById("header");
let welcome = document.getElementById("welcome")

function getStarted() {
  welcome.remove();
  drawKittens();
  header.classList.remove("hidden")
}

/**
 * Defines the Properties of a Kitten
 * @typedef {{id: string, name: string, mood: string, affection: number}} Kitten
 */

/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return (
    Math.floor(Math.random() * 10000000) +
    "-" +
    Math.floor(Math.random() * 10000000)
  );
}
loadKittens()
getStarted() // TODO remove later, disables start screen