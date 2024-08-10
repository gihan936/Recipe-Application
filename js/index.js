// Example JavaScript code for the home page
document.addEventListener('DOMContentLoaded', () => {
    const featuredRecipes = [
        { name: 'Spaghetti Carbonara', img: 'images/recipe1.jpg' },
        { name: 'Chicken Alfredo', img: 'images/recipe2.jpg' },
        { name: 'Beef Stroganoff', img: 'images/recipe3.jpg' },
        { name: 'Vegetarian Chili', img: 'images/recipe4.jpg' }
    ];

    const featuredContainer = document.getElementById('featured-recipes');

    featuredRecipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe-item';
        
        const recipeImg = document.createElement('img');
        recipeImg.src = recipe.img;
        recipeImg.alt = recipe.name;
        
        const recipeName = document.createElement('h2');
        recipeName.textContent = recipe.name;
        
        recipeDiv.appendChild(recipeImg);
        recipeDiv.appendChild(recipeName);
        featuredContainer.appendChild(recipeDiv);
    });

    document.getElementById('explore').addEventListener('click', () => {
        window.location.href = 'recipes.html';
    });
});
