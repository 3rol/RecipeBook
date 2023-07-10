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

          $.ajax({
            url: 'rest/users/' + data[i].user_id,
            type: 'GET',
            dataType: 'json',
            beforeSend: function (xhr) {
              xhr.setRequestHeader('Authorization', localStorage.getItem('user_token'));
            },
            success: function (user) {
              // Fetch recipe type data 
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
                      <a href="./recipe-details.html" class="main-button">Read More</a>
                    </div> 
                  </div>`;
                  $("#all-posts").html(html);
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
  },
  addRecipe: function (recipeData) {
    $.ajax({
      url: 'rest/recipes',
      type: 'POST',
      data: JSON.stringify(recipeData),
      contentType: 'application/json',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('user_token'));
      },
      success: function (response) {
        console.log("Recipe added successfully.");

      },
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  }
};
