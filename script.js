async function getRecipes() {
    const ingredients = document.getElementById('ingredients').value;
    if (!ingredients) {
        alert('Please enter some ingredients!');
        return;
    }
    const apiKey = 'c63f83eb973f4905b6a51c0d8f08a7b9';
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=6&apiKey=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayRecipes(data);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

function displayRecipes(recipes) {
    const recipeContainer = document.getElementById('recipes');
    recipeContainer.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeHTML = `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h5>${recipe.title}</h5>
                <a href="https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, '-').toLowerCase()}-${recipe.id}" target="_blank">View Recipe</a>
            </div>`;
        recipeContainer.innerHTML += recipeHTML;
    });
}