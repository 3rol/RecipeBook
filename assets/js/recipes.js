var RecipeService = {
  getRecipes: function () {
    $.ajax({
      url: ' rest/recipes',
      type: 'GET',
      dataType: 'json',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('user_token'));
      },
      success: function (data) {
        var html = '';
        for (let i = 0; i < data.length; i++) {
          html += `<div class="post-item">' +
      '<div class="post-main-info">' +
      '<p class="post-title">'` + data[i].name + ` '</p>' +
      '<div class="post-meta">' +
      '<span><i class="far fa-user"></i> Posted by '` + data[i].user_id + `'</span>' +
      '</div>' +
      '<p>'` + data[i].description + ` '</p>' +
      '<a href="./recipe-details.html" class="main-button">Read More</a>' +
      '</div>' +
      '</div>'`
        };
        $("#all-posts").html(html);
      },
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  }
}


