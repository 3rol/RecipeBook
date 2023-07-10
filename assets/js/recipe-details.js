var RecipeDetailsService = {
    getRecipeDetails: function (id) {
        $.ajax({
            url: 'rest/recipes/' + id,
            type: 'GET',
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('user_token'));
            },
            success: function (recipe) {
                // Use the recipe data to populate the details on the page
                $("#recipe-title").text(recipe.name);
                $("#recipe-description").text(recipe.description);
                $("#recipe-type").text(recipe.recipe_type);
                // ...
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        });
    }
};
