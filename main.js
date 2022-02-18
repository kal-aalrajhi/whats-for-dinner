// Global variables
var letsCookButton = document.querySelector('#cook-button');
var clearButton = document.querySelector('#clear-button');
var foodChoices = document.getElementsByName('food-choice');
var cookPotImg = document.querySelector('#cook-pot-image');
var foodSuggestion = document.querySelectorAll('.food-suggestion');
// var foodSuggestion = document.querySelector('.suggestion');
// var randFood = "";

// Event listeners
letsCookButton.addEventListener('click', submitChoice);
clearButton.addEventListener('click', hideRandFood);

// Functions
function submitChoice() {
    for (var i = 0; i < foodChoices.length; i++) {
        if(foodChoices[i].checked) {
            randFood = randomizeFoodItem(foodChoices[i].value);
            displayRandFood(randFood);
        }
    }
}

function displayRandFood(randFood) {
    cookPotImg.classList.add('hidden');
    foodSuggestion[0].classList.remove('hidden');
    foodSuggestion[1].classList.remove('hidden');
    foodSuggestion[2].classList.remove('hidden');
    foodSuggestion[1].innerText = randFood;
}

// function hideRandFood() {
//     cookPotImg.classList.add('hidden');
//     foodSuggestion[0].classList.remove('hidden');
//     foodSuggestion[1].classList.remove('hidden');
//     foodSuggestion[2].classList.remove('hidden');
//     foodSuggestion[1].innerText = randFood;
// }

function randomizeFoodItem(foodType) {
    if (foodType === "sides") {
        return sides[randomIndex(sides)];
    } else if (foodType === "dishes") {
        return dishes[randomIndex(dishes)];
    } else if (foodType === "desserts") {
        return desserts[randomIndex(desserts)];
    } else {
        return "Make another selection";
    }
}

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}