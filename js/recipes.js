document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        { id: 1, name: 'Spaghetti Carbonara', img: 'images/recipe1.jpg', description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.' },
        { id: 2, name: 'Chicken Alfredo', img: 'images/recipe2.jpg', description: 'A creamy pasta dish made with chicken, heavy cream, and parmesan cheese.' },
        { id: 3, name: 'Beef Stroganoff', img: 'images/recipe3.jpg', description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.' },
        { id: 4, name: 'Vegetarian Chili', img: 'images/recipe4.jpg', description: 'A creamy pasta dish made with chicken, heavy cream, and parmesan cheese.' },
        { id: 5, name: 'Caesar Salad', img: 'images/recipe5.jpg', description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.' },
        { id: 6, name: 'Chicken Tikka Masala', img: 'images/recipe6.jpg', description: 'A creamy pasta dish made with chicken, heavy cream, and parmesan cheese.' },
        { id: 7, name: 'Fish Tacos', img: 'images/recipe7.jpg', description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.' },
        { id: 8, name: 'Pad Thai', img: 'images/recipe8.jpg', description: 'A creamy pasta dish made with chicken, heavy cream, and parmesan cheese.' },
        { id: 9, name: 'Sushi Rolls', img: 'images/recipe9.jpg', description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.' },
        { id: 10, name: 'Mushroom Risotto', img: 'images/recipe10.jpg', description: 'A creamy pasta dish made with chicken, heavy cream, and parmesan cheese.' },

        // Add more recipes as needed
    ];

    const recipeList = document.getElementById('recipe-list');

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe-item';
        recipeDiv.innerHTML = `
            <img src="${recipe.img}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
        `;

        recipeDiv.addEventListener('click', () => {
            openModal(recipe);
        });

        recipeList.appendChild(recipeDiv);
    });

    const modal = document.getElementById('recipe-modal');
    const closeBtn = document.querySelector('.modal .close');

    function openModal(recipe) {
        document.getElementById('recipe-title').textContent = recipe.name;
        document.getElementById('recipe-image').src = recipe.img;
        document.getElementById('recipe-description').textContent = recipe.description;
        modal.style.display = 'block';
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});