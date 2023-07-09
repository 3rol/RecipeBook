var RecipeService = {
  addRecipe: function () {
    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6ImVyb2wiLCJlbWFpbCI6ImVyb2xAZ21haWwuY29tIiwiYWNjb3VudF9pZCI6MX0.YH9UYC7vhz9zVOFG9O0zGx-uNAsigP0p-k6_sTJXJe8";
    // Split the token into its three parts: header, payload, and signature
    var parts = token.split('.');
    var payload = parts[1];

    // Decode the payload from base64
    var decodedPayload = atob(payload);

    // Parse the decoded payload as JSON
    var payloadObj = JSON.parse(decodedPayload);

    // Retrieve the 'id' field from the payload
    var userId = payloadObj.id;


    var title = $("#recipeTitle").val();
    var type = $("#recipeType").val();
    var description = $("#description").val();

    var newRecipe = {
      user_id: userId,
      name: title,
      type: type,
      description: description
    };

    $.ajax({
      url: "rest/recipes",
      type: "POST",
      data: JSON.stringify(newRecipe),
      contentType: "application/json",
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('user_token'));
      },
      success: function (response) {
        console.log("Recipe added successfully");
        // Reset the form after successful submission
        $("#recipeForm")[0].reset();
      },
      error: function (error) {
        console.error("Failed to add recipe:", error);
      }
    });
  }
};
