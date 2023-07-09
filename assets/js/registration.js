var Registration = {
  init: function () {
    var token = localStorage.getItem("user_token");
    if (token) {
      window.location.replace("index.html");
    }
    $("#register-form").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 8
        },
        confirmPassword: {
          required: true,
          equalTo: "#password"
        }
      },
      messages: {
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address"
        },
        password: {
          required: "Please enter a password",
          minlength: "Your password must be at least 8 characters long"
        },
        confirmPassword: {
          required: "Please confirm your password",
          equalTo: "Passwords do not match"
        }
      },
      submitHandler: function (form) {
        var entity = Object.fromEntries(new FormData(form).entries());
        Registration.register(entity);
      },
    });
  },
  register: function (entity) {
    $.ajax({
      url: "rest/register",
      type: "POST",
      data: JSON.stringify(entity),
      contentType: "application/json",
      dataType: "json",
      success: function (result) {
        console.log(result);
        toastr.success("Registration successful! Please login to continue.");
        window.location.replace("login.html");
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        toastr.error(XMLHttpRequest.responseJSON.message);
      },
    });
  },

  logout: function () {
    localStorage.clear();
    window.location.replace("login.html");
  },
};

$(document).ready(function () {
  Registration.init();
});
