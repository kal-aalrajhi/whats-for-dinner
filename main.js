// Global variables
var letsCookButton = document.querySelector('#cook-button');
var clearButton = document.querySelector('#clear-button');
var foodChoices = document.getElementsByName('food-choice');
var cookPotImg = document.querySelector('#cook-pot-image');
var foodSuggestion = document.querySelectorAll('.food-suggestion');
var addRecipeButton = document.querySelector('#add-recipe-button');
var addNewButton = document.querySelector('#add-new-button');
var addFoodForm = document.querySelector('.add-food-form');


// Event listeners
letsCookButton.addEventListener('click', submitChoice);
clearButton.addEventListener('click', hideRandFood);
addRecipeButton.addEventListener('click', revealRecipeForm);
addNewButton.addEventListener('click', addNewRecipe);

// Functions
function submitChoice() {
    for (var i = 0; i < foodChoices.length; i++) {
        if(foodChoices[i].checked) {
            var randFood = randomizeFoodItem(foodChoices[i].value);
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

function hideRandFood() {
    cookPotImg.classList.remove('hidden');
    foodSuggestion[0].classList.add('hidden');
    foodSuggestion[1].classList.add('hidden');
    foodSuggestion[2].classList.add('hidden');
}

function randomizeFoodItem(foodType) {
    if (foodType === 'sides') {
        return sides[randomIndex(sides)];
    } else if (foodType === 'dishes') {
        return dishes[randomIndex(dishes)];
    } else if (foodType === 'desserts') {
        return desserts[randomIndex(desserts)];
    } else {
        return 'Another Selection';
    }
}

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function revealRecipeForm() {
    addFoodForm.classList.toggle('hidden');
    clearRecipeForm();
}

function addNewRecipe() {
    event.preventDefault();
    var recipeType = document.querySelector('#recipe-type').value.toLowerCase();
    var recipeName = document.querySelector('#recipe-name').value;
    
    if (recipeType === 'side') {
        sides.push(recipeName);
    } else if (recipeType === 'main dish') {
        dishes.push(recipeName);
    } else if (recipeType === 'dessert') {
        desserts.push(recipeName);
    } else {
        alert("Invalid recipe type. Must choose: side, main dish or dessert.")
    }
    displayRandFood(recipeName);
    clearRecipeForm();
}

function clearRecipeForm() {
    document.querySelector('#recipe-type').value = "";
    document.querySelector('#recipe-name').value = "";
}