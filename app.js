const header = document.getElementById("header");
const welcome = document.getElementById("welcome");

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

function setAffection() {
  return Math.floor((Math.random() * 6) + 3);
}

let affection = setAffection()
let mood = setKittenMood()
function addKitten(event) {
  event.preventDefault()
  let form = event.target
  let catName = form.catName.value
  let id = catName + "-" + generateId()
  let catPic = "https://robohash.org/" + id + "?set=set4";
  newCat = kittens.find(cat => cat.name == catName)
  affection = setAffection()
  mood = setKittenMood()
  let moodColor = setMoodColor()

  newCat = {
    id: id,
    name: catName,
    pic: catPic,
    affection: affection,
    mood: mood,
    moodColor: moodColor,
  }

  function setMoodColor() {
  
    if (mood == "Happy") { return "happy" }
    else if (mood == "Tolerant") { return "tolerant" }
    else if (mood == "Angry") { return "angry" }
    else if (mood == "Gone") { return "gone" }
  
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
    <div class="card no-interact kitten-card">
    <img class="kitten ${newCat.moodColor} img" src="${newCat.pic}">
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
function setKittenMood() {

  if (affection >= 6) { return "Happy" }
  else if (affection <= 5 && affection > 3) { return "Tolerant" }
  else if (affection <= 3 && affection > 0) { return "Angry" }
  else if (affection <= 0) { return "Gone" }
  
  
}





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