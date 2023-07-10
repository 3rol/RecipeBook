var RecipeDetailsService = {
    getRecipeDetails: function (recipe_id) {
        $.ajax({
            url: 'rest/recipes/' + recipe_id,
            type: 'GET',
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('user_token'));
            },
            success: function (recipe) {
                html += `<div class="post-item"> 
                <div class="post-main-info"> 
                  <p class="post-title">Recipe name: ` + recipe.name + `</p>
                  <div class="post-meta">
                    <span><i class="far fa-user"></i> Posted by: ` + user.name + `</span>
                  </div> 
                  <p>Description: ` + recipe.description + `</p> 
                  <p>Recipe Type: ` + recipe.type + `</p> 
                  <a href="./recipe-details.html" class="main-button">Read More</a>
                </div> 
              </div>`;
                $("#all-posts").html(html);
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        });
    }
};
