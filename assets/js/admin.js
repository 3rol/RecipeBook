$(document).ready(function () {
  // Attach event listener to delete buttons
  $('#recipe-list').on('click', '.delete-button', function () {
    const recipeId = $(this).data('id');
    deleteRecipe(recipeId);
  });

  // Function to send AJAX request for deleting a recipe
  function deleteRecipe(recipeId) {
    $.ajax({
      url: '/api/recipes/' + recipeId,
      type: 'DELETE',
      success: function (response) {
        // Recipe deleted successfully
        console.log('Recipe deleted successfully');
        // Refresh the recipe list
        location.reload();
      },
      error: function (xhr, status, error) {
        console.log('Error deleting recipe:', error);
      }
    });
  }
});
