// Global variables
var letsCookButton = document.querySelector('#cook-button');
var foodChoices = document.getElementsByName('food-choice');
var selectedChoice;
// Event listeners
letsCookButton.addEventListener('click', submitChoice);

// Functions
function submitChoice() {
    for (var i = 0; i < foodChoices.length; i++) {
        if(foodChoices[i].checked) {
            selectedChoice = foodChoices[i].value;
        }
    }
}

function generateRandomFoodItem(foodType) {
    if (foodType === "sides") {
        return sides[randomIndex(sides)];
    } else if (foodType === "dishes") {
        return mains[randomIndex(dishes)];
    } else if (foodType === "desserts") {
        return desserts[randomIndex(desserts)];
    } else {
        return "Invalid food type";
    }
}

function generateRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}