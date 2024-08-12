
//This page is created by Twisha shastri-8989112 as part of JavaScript Programming Group Project

$(document).ready(() => {
    // Array of recipes with details
    const recipes = [
        { id: 1, name: 'Spaghetti Carbonara', img:'images/Spaghetti-Carbonara.jpg', description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.', ingredients: 'Pasta, Eggs, Cheese, Pancetta, Pepper', instructions: 'Boil pasta. Cook pancetta. Mix with eggs and cheese.', cuisine: 'Italian', dietary: 'Gluten-Free' },
        { id: 2, name: 'Vegetable Stir-Fry', img: 'images/stirfried-vegetables.jpg', description: 'A quick and easy stir-fry with a variety of fresh vegetables.', ingredients: 'Vegetables, Soy Sauce, Olive Oil', instructions: 'Stir-fry vegetables in olive oil. Add soy sauce to taste.', cuisine: 'Chinese', dietary: 'Vegetarian' },
        { id: 3, name: 'Chicken Alfredo', img: 'images/chicken_alfredo.jpeg', description: 'Creamy pasta with chicken, mushrooms, and Parmesan cheese.', ingredients: 'Chicken, Fettuccine, Cream, Parmesan Cheese, Mushrooms, Garlic', instructions: 'Cook chicken and mushrooms. Prepare Alfredo sauce with cream and Parmesan. Mix with cooked pasta.', cuisine: 'Italian', dietary: 'Contains Dairy' },
        { id: 4, name: 'Beef Tacos', img: 'images/Beef-Tacos.jpg', description: 'Flavorful beef tacos with fresh toppings and a spicy kick.', ingredients: 'Ground Beef, Taco Shells, Lettuce, Tomato, Cheese, Salsa', instructions: 'Cook ground beef with taco seasoning. Assemble tacos with desired toppings.', cuisine: 'Mexican', dietary: 'Contains Meat' },
        { id: 5, name: 'Greek Salad', img: 'images/greek-salad.jpg', description: 'A refreshing salad with cucumbers, tomatoes, olives, and feta cheese.', ingredients: 'Cucumbers, Tomatoes, Olives, Feta Cheese, Red Onion, Olive Oil', instructions: 'Combine all ingredients in a bowl. Drizzle with olive oil and toss.', cuisine: 'Italian', dietary: 'Vegetarian' },
        { id: 6, name: 'Lemon Garlic Shrimp', img: 'images/garlic-Shrimp.jpg', description: 'Tender shrimp cooked in a zesty lemon garlic sauce.', ingredients: 'Shrimp, Lemon Juice, Garlic, Butter, Parsley', instructions: 'Sauté shrimp in butter with garlic and lemon juice. Garnish with parsley.', cuisine: 'Chinese', dietary: 'Gluten-Free' },
        { id: 7, name: 'Quinoa Salad', img: 'images/Quinoa-Salad.jpg', description: 'A healthy salad with quinoa, black beans, corn, and avocado.', ingredients: 'Quinoa, Black Beans, Corn, Avocado, Lime Juice', instructions: 'Mix cooked quinoa with beans, corn, and avocado. Dress with lime juice.', cuisine: 'Mexican', dietary: 'Vegan' },
        { id: 8, name: 'Chicken Curry', img: 'images/Chicken Curry.jpg', description: 'A flavorful curry with tender chicken pieces and aromatic spices.', ingredients: 'Chicken, Curry Powder, Coconut Milk, Onions, Garlic, Ginger', instructions: 'Cook onions, garlic, and ginger. Add chicken and curry powder. Simmer with coconut milk.', cuisine: 'Indian', dietary: 'Gluten-Free' },
        { id: 9, name: 'Mango Smoothie', img: 'images/mango-smoothie.jpg', description: 'A refreshing smoothie made with fresh mangoes and yogurt.', ingredients: 'Mangoes, Yogurt, Honey, Ice', instructions: 'Blend mangoes with yogurt, honey, and ice until smooth.', cuisine: 'Indian', dietary: 'Contains Dairy' },
        { id: 10, name: 'Vegetarian Chili', img: 'images/Vegetarian-Chili.jpg', description: 'A hearty chili packed with vegetables and beans.', ingredients: 'Beans, Tomatoes, Bell Peppers, Onions, Chili Powder', instructions: 'Sauté onions and bell peppers. Add beans, tomatoes, and chili powder. Simmer until flavors meld.', cuisine: 'Indian', dietary: 'Vegan' },
        { id: 11, name: 'Pad Thai', img: 'images/Pad-Thai.jpg', description: 'A popular Thai noodle dish with a mix of sweet, sour, and savory flavors.', ingredients: 'Rice Noodles, Tofu, Peanuts, Bean Sprouts, Lime Juice, Fish Sauce', instructions: 'Stir-fry noodles with tofu and vegetables. Add peanuts and lime juice.', cuisine: 'Mexican', dietary: 'Vegan' },
        { id: 12, name: 'Beef Stroganoff', img: 'images/Beef-Stroganoff.jpg', description: 'Tender beef in a creamy mushroom sauce served over egg noodles.', ingredients: 'Beef, Mushrooms, Sour Cream, Onion, Egg Noodles', instructions: 'Cook beef and mushrooms. Prepare sauce with sour cream. Serve over egg noodles.', cuisine: 'Chinese', dietary: 'Contains Dairy' },
        { id: 13, name: 'Falafel', img: 'images/Falafel.jpg', description: 'Deep-fried balls made from chickpeas, served in pita with vegetables and tahini sauce.', ingredients: 'Chickpeas, Garlic, Onion, Cumin, Coriander', instructions: 'Blend chickpeas with spices. Shape into balls and fry. Serve in pita.', cuisine: 'Italian', dietary: 'Vegan' },
        { id: 14, name: 'Pumpkin Soup', img: 'images/pumpkin-soup.jpg', description: 'A creamy and comforting soup made with fresh pumpkin and spices.', ingredients: 'Pumpkin, Onion, Garlic, Cream, Nutmeg', instructions: 'Sauté onions and garlic. Add pumpkin and broth. Puree and add cream.', cuisine: 'Indian', dietary: 'Contains Dairy' },
        { id: 15, name: 'Shrimp Tacos', img: 'images/Shrimp-Tacos.jpg', description: 'Tacos filled with spicy shrimp and topped with a crunchy slaw.', ingredients: 'Shrimp, Taco Shells, Cabbage, Lime, Cilantro', instructions: 'Cook shrimp with spices. Fill taco shells with shrimp and slaw.', cuisine: 'Mexican', dietary: 'Contains Meat' },
        { id: 16, name: 'Caesar Salad', img: 'images/Caesar-Salad.jpg', description: 'A classic salad with romaine lettuce, croutons, and Caesar dressing.', ingredients: 'Romaine Lettuce, Croutons, Parmesan Cheese, Caesar Dressing', instructions: 'Toss lettuce with dressing, croutons, and cheese.', cuisine: 'Indian', dietary: 'Contains Dairy' },
        { id: 17, name: 'Mushroom Risotto', img: 'images/Risotto-Mushrooms.jpg', description: 'Creamy risotto with mushrooms and Parmesan cheese.', ingredients: 'Arborio Rice, Mushrooms, Onion, Parmesan Cheese, White Wine', instructions: 'Cook rice with mushrooms and onions. Add broth and wine. Stir in Parmesan.', cuisine: 'Italian', dietary: 'Contains Dairy' },
        { id: 18, name: 'Goulash', img: 'images/Goulash.jpg', description: 'A rich stew of beef and vegetables seasoned with paprika.', ingredients: 'Beef, Potatoes, Bell Peppers, Paprika, Tomatoes', instructions: 'Cook beef with vegetables and spices. Simmer until tender.', cuisine: 'Mexican', dietary: 'Contains Meat' },
        { id: 19, name: 'Tiramisu', img: 'images/tiramisu.jpg', description: 'A classic Italian dessert made of layers of coffee-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.', ingredients: 'Ladyfingers, Mascarpone cheese, Eggs, Sugar, Espresso or strong coffee, Cocoa powder', instructions: 'Whisk egg yolks and sugar, then mix with mascarpone. Layer coffee-soaked ladyfingers and mascarpone mixture in a dish. Chill and top with cocoa powder before serving.', cuisine: 'Italian', dietary: 'Contains Dairy' },
        { id: 20, name: 'Egg Tarts (Dan Tat)', img: 'images/Egg Tarts (Dan Tat).jpg', description: 'Mini tarts with a smooth, sweet egg custard filling, a staple in dim sum.', ingredients: 'Egg yolks, Sugar, Milk, Egg tart pastry shells', instructions: 'Prepare the custard by mixing egg yolks, sugar, and milk. Pour into pre-baked tart shells and bake until the custard is set.', cuisine: 'Chinese', dietary: 'Contains Dairy' },
        { id: 21, name: 'Churros', img: 'images/churros.jpg', description: 'Fried dough pastries rolled in cinnamon sugar, often served with chocolate dipping sauce.', ingredients: 'Flour, Butter, Sugar, Cinnamon, Eggs, Water', instructions: 'Make a dough by combining flour, butter, sugar, and water. Pipe into hot oil and fry until golden. Roll in cinnamon sugar.', cuisine: 'Mexican', dietary: 'Contains Dairy' },
        { id: 22, name: 'Gulab Jamun', img: 'images/gulab-jamun.jpg', description: 'Deep-fried dough balls soaked in a fragrant sugar syrup flavored with cardamom.', ingredients: 'Milk powder, Flour, Ghee, Sugar, Water, Cardamom', instructions: 'Make dough balls from milk powder and flour, fry until golden, then soak in a sugar syrup flavored with cardamom.', cuisine: 'Indian', dietary: 'Contains Dairy' }
    ];

    // Function to display recipes in the UI
    const displayRecipes = (recipes) => {
        const $recipeList = $('#recipe-list');
        const $noRecipesMessage = $('#no-recipes-message');
        $recipeList.empty();
        $noRecipesMessage.hide(); // Hide the no recipes message initially
        if (recipes.length === 0) {
            $noRecipesMessage.show(); // Show message if no recipes are found
            return;
        }

        $noRecipesMessage.hide(); // Hide message if there are recipes to display


        recipes.forEach((recipe, index) => {
            const $recipeItem = $(`
                <div class="recipe-item" style="opacity: 0; transition: opacity 0.5s;">
                    <img src="${recipe.img}" alt="${recipe.name}" style="display: none; width: 100%; height: auto;"/>
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <button data-id="${recipe.id}">View Details</button>
                </div>
            `);
            $recipeList.append($recipeItem);

            // Animate the recipe item to fade in
            $recipeItem.delay(200 * index).animate({ opacity: 1 }, 500);

            // Animate the image to fade in when the recipe item appears
            $recipeItem.find('img').fadeIn(300);
        });

        // Event listeners for 'View Details' buttons
        $('.recipe-item button').on('click', (e) => {
            const recipeId = parseInt($(e.target).data('id'));
            const recipe = recipes.find(r => r.id === recipeId);
            openModal(recipe);
        });
    }

    // Function to open the modal and show recipe details
    const openModal = (recipe) => {
        $('#recipe-title').text(recipe.name);
        $('#recipe-image').attr('src', recipe.img).hide().fadeIn(500);
        $('#recipe-description').text(recipe.description);
        $('#recipe-ingredients').text(`Ingredients: ${recipe.ingredients}`);
        $('#recipe-instructions').text(`Instructions: ${recipe.instructions}`);
        $('#recipe-modal').fadeIn(300).attr('aria-hidden', 'false');
    }

    // Function to close the modal
    const closeModal = () => {
        $('#recipe-modal').fadeOut(300).attr('aria-hidden', 'true');
    }

    // Event listener for closing the modal
    $('.modal .close').on('click', closeModal);

    // Close the modal if clicking outside of it
    $(window).on('click', (event) => {
        if ($(event.target).is('#recipe-modal')) {
            closeModal();
        }
    });

    // Filtering recipes based on user input
    const $ingredientSearch = $('#ingredient-search');
    const $cuisineFilter = $('#cuisine-filter');
    const $dietaryFilter = $('#dietary-filter');

    const filterRecipes = () => {
        const ingredientValue = $ingredientSearch.val().toLowerCase();
        const cuisineValue = $cuisineFilter.val();
        const dietaryValue = $dietaryFilter.val();

        const filteredRecipes = recipes.filter(recipe => {
            // Check if recipe matches all filter criteria
            const matchesIngredient = recipe.ingredients.toLowerCase().includes(ingredientValue);
            const matchesCuisine = cuisineValue === '' || recipe.cuisine === cuisineValue;
            const matchesDietary = dietaryValue === '' || recipe.dietary === dietaryValue;
            return matchesIngredient && matchesCuisine && matchesDietary;
        });

        displayRecipes(filteredRecipes);
    }

    // Event listeners for filter inputs
    $ingredientSearch.on('input', filterRecipes);
    $cuisineFilter.on('change', filterRecipes);
    $dietaryFilter.on('change', filterRecipes);

    // Initial display of recipes
    displayRecipes(recipes);
});
