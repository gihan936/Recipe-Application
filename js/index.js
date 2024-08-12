// Example JavaScript code for the home page
document.addEventListener('DOMContentLoaded', () => {
    const featuredRecipes = [
        { name: 'Beef Stroganoff', img: 'images/Beef-Stroganoff.jpg' },
        { name: 'Stirfried Vegetables', img: 'images/stirfried-vegetables.jpg' },
        { name: 'Garlic Shrimp', img: 'images/garlic-Shrimp.jpg' },
        { name: 'Mango Smoothie', img: 'images/mango-smoothie.jpg' }
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
