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

          $.ajax({
            url: 'rest/users/' + data[i].user_id,
            type: 'GET',
            dataType: 'json',
            beforeSend: function (xhr) {
              xhr.setRequestHeader('Authorization', localStorage.getItem('user_token'));
            },
            success: function (user) {

              $.ajax({
                url: 'rest/recipetype/' + data[i].type_id,
                type: 'GET',
                dataType: 'json',
                beforeSend: function (xhr) {
                  xhr.setRequestHeader('Authorization', localStorage.getItem('user_token'));
                },
                success: function (recipeType) {
                  html += `<div class="post-item" data-recipe-id="` + data[i].id + `"> 
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
      // Remove recipe
      $("[data-recipe-id='" + recipeId + "']").remove();
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
}