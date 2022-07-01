
const searchBtn = document.querySelector(".searchBtn");
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const saveRecipeBtn = document.getElementById('save-recipe-btn');

searchBtn.addEventListener("click", getRecipes);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
})
saveRecipeBtn.addEventListener("click", storeRecipe);



function getRecipes(event) {
    event.preventDefault();

    let searchInput = document.querySelector('#ingredientSearch').value.trim();
    console.log(searchInput);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                        <div class = "meal-item" data-id = "${meal.idMeal}">
                            <div class = "meal-img">
                                <img src = "${meal.strMealThumb}" alt = "food">
                            </div>
                            <div class = "meal-name">
                                <h3>${meal.strMeal}</h3>
                                <a href = "#" class = "recipe-btn">Get Recipe</a>
                            </div>
                        </div>
                    `;
                });
                mealList.classList.remove('notFound');
            } else {
                html = "Sorry, we didn't find any meal!";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
}

function getMealRecipe(event) {
    event.preventDefault();
    if (event.target.classList.contains('recipe-btn')) {
        let mealItem = event.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
            .then(response => response.json())
            .then(data => mealRecipeCard(data.meals));
    }
}

function mealRecipeCard(meal) {
    console.log(meal);
    meal = meal[0];
    let recipe = `
   <h2 class="title">${meal.strMeal}</h2>
   <p class="category">${meal.strCategory}</p>
   
   <div class = "recipe-instruct">
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
   </div>
   
   <div class = "recipe-meal-img">
        <img src = "${meal.strMealThumb}" alt = "${meal.strTags}">
   </div>
   <div class = "recipe-link">
        <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
   </div>
    `
    mealDetailsContent.innerHTML = recipe;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}
