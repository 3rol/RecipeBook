$(document).ready(function() {
    $.ajax({
      url: '/recipes', // Replace with the appropriate endpoint URL
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        displayRecipes(data);
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  });
  
  function displayRecipes(recipes) {
    var container = $('.all-posts');
  
    recipes.forEach(function(recipe) {
      var recipeHTML = '<div class="post-item">' +
                       '<div class="post-main-info">' +
                       '<p class="post-title">' + recipe.title + '</p>' +
                       '<div class="post-meta">' +
                       '<span><i class="far fa-user"></i> Posted by ' + recipe.author + '</span>' +
                       '</div>' +
                       '<p>' + recipe.description + '</p>' +
                       '<a href="./recipe-details.html" class="main-button">Read More</a>' +
                       '</div>' +
                       '</div>';
  
      container.append(recipeHTML);
    });
  }
  