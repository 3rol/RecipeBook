$(document).ready(function() {
  $("#recipeForm").submit(function(event) {
    event.preventDefault();
    RecipeService.addRecipe();
  });
});

var RecipeService = {
  addRecipe: function() {
    var title = $("#recipeTitle").val();
    var type = $("#recipeType").val();
    var description = $("#description").val();

    var newRecipe = {
      title: title,
      type: type,
      description: description
    };

    $.ajax({
      url: "rest/recipes",
      type: "POST",
      data: JSON.stringify(newRecipe),
      contentType: "application/json",
      success: function(response) {
        console.log("Recipe added successfully");
        // Reset the form after successful submission
        $("#recipeForm")[0].reset();
      },
      error: function(error) {
        console.error("Failed to add recipe:", error);
      }
    });
  }
};
