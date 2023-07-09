$(document).ready(function () {
  // Load recipes from the server
  loadRecipes();

  // Attach event listener to delete buttons
  $('#recipe-list').on('click', '.delete-button', function () {
    const recipeId = $(this).data('id');
    deleteRecipe(recipeId);
  });

  // Function to load recipes from the server
  function loadRecipes() {
    $.ajax({
      url: '/api/recipes',
      type: 'GET',
      success: function (recipes) {
        // Recipes loaded successfully
        displayRecipes(recipes);
      },
      error: function (xhr, status, error) {
        console.log('Error loading recipes:', error);
      }
    });
  }

  // Function to display recipes in the HTML
  function displayRecipes(recipes) {
    var recipeList = $('#recipe-list');
    recipeList.empty();

    recipes.forEach(function (recipe) {
      var listItem = $('<li>').text(recipe.title);
      var deleteButton = $('<button>').addClass('delete-button').text('Delete').data('id', recipe.id);
      listItem.append(deleteButton);
      recipeList.append(listItem);
    });
  }

  // Function to send AJAX request for deleting a recipe
  function deleteRecipe(recipeId) {
    $.ajax({
      url: '/api/recipes/' + recipeId,
      type: 'DELETE',
      success: function (response) {
        // Recipe deleted successfully
        console.log('Recipe deleted successfully');
        // Reload the recipes
        loadRecipes();
      },
      error: function (xhr, status, error) {
        console.log('Error deleting recipe:', error);
      }
    });
  }
});
