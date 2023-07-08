document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      RecipeService.addRecipe();
    });
  });

  
  var RecipeService = {
    addRecipe: function (recipe) {
      // Code to handle adding a recipe
      var title = document.getElementById("recipeTitle").value;
      var type = document.getElementById("recipeType").value;
      var description = document.getElementById("description").value;
      
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
        success: function (response) {
          // Handle the success response
          console.log("Recipe added successfully");
        },
        error: function (error) {
          // Handle the error response
          console.error("Failed to add recipe:", error);
        }
      });
      
      // Reset the form after adding the recipe
      document.getElementById("recipeTitle").value = "";
      document.getElementById("recipeType").value = "Choose";
      document.getElementById("description").value = "";
    }
  };
  