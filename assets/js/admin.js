var RecipeService = {
  getRecipes: function () {
    $.ajax({
      url: 'rest/recipes',
      type: 'GET',
      dataType: 'json',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('user_token'));
      },
      success: function (data) {
        console.log(data);
        var html = '';
        for (let i = 0; i < data.length; i++) {
          // Fetch user data for the current recipe's user_id
          $.ajax({
            url: 'rest/users/' + data[i].user_id,
            type: 'GET',
            dataType: 'json',
            beforeSend: function (xhr) {
              xhr.setRequestHeader('Authorization', localStorage.getItem('user_token'));
            },
            success: function (user) {
              // Fetch recipe type data for the current recipe's type_id
              $.ajax({
                url: 'rest/recipetype/' + data[i].type_id,
                type: 'GET',
                dataType: 'json',
                beforeSend: function (xhr) {
                  xhr.setRequestHeader('Authorization', localStorage.getItem('user_token'));
                },
                success: function (recipeType) {
                  html += `<div class="post-item"> 
                    <div class="post-main-info"> 
                      <p class="post-title">Recipe name: ` + data[i].name + `</p>
                      <div class="post-meta">
                        <span><i class="far fa-user"></i> Posted by: ` + user.name + `</span>
                      </div> 
                      <p>Description: ` + data[i].description + `</p> 
                      <p>Recipe Type: ` + recipeType.type + `</p> 
                      <a href="./recipe-details.html?id=` + data[i].id + `" class="main-button">Read More</a>
                      <button class="delete-button" data-recipe-id="` + data[i].id + `">Delete</button>
                    </div> 
                  </div>`;
                  $("#all-posts").html(html);

                  // Attach event listener to delete button
                  $(".delete-button").on("click", function () {
                    var recipeId = $(this).data("recipe-id");
                    deleteRecipe(recipeId);
                  });
                },
                error: function (xhr, status, error) {
                  console.log(error);
                }
              });
            },
            error: function (xhr, status, error) {
              console.log(error);
            }
          });
        }
      },
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  }
};


function deleteRecipe(recipeId) {
  $.ajax({
    url: 'rest/recipes/' + recipeId,
    type: 'DELETE',
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', localStorage.getItem('user_token'));
    },
    success: function (response) {
      console.log("Recipe deleted successfully.");
      // Reload the recipe list after deleting the recipe
      RecipeService.getRecipes();
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
}
