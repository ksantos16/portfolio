import GetSaveRecipes from "./utilities.js";

const savedRecipes = document.querySelector(".favorite-btn");

const mySavedRecipes = new GetSaveRecipes("recipe");

savedRecipes.addEventListener("click", mySavedRecipes);







