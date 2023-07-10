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
        var html = '';
        for (let i = 0; i < data.length; i++) {
          var recipe = data[i];
          getUser(recipe.user_id, function (user) {
            html += `<div class="post-item"> 
              <div class="post-main-info"> 
                <p class="post-title">` + recipe.name + ` </p>
                <div class="post-meta">
                  <span><i class="far fa-user"></i> Posted by: ` + user.name + `</span>
                </div> 
                <p>' Description: ` + recipe.description + ` '</p> 
                <a href="./recipe-details.html" class="main-button">Read More</a>
              </div> 
            </div>`;

            $("#all-posts").html(html);
          });
        }
      },
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  }
};

// This will make it so I get the name of user that posted based off their ID
function getUser(userId, callback) {
  $.ajax({
    url: 'rest/users/' + userId,
    type: 'GET',
    dataType: 'json',
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', localStorage.getItem('user_token'));
    },
    success: function (user) {
      callback(user);
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
}
