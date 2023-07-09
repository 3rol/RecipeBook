var UserService = {
  init: function () {
    var token = localStorage.getItem("user_token");
    if (token) {
      window.location.replace("index.html");
    }
    $("#login-form").validate({
      submitHandler: function (form) {
        var entity = Object.fromEntries(new FormData(form).entries());
        UserService.login(entity);
      },
    });
  },
  login: function (entity) {
    $.ajax({
      type: "POST",
      url: "rest/login",
      data: JSON.stringify(entity),
      contentType: "application/json",
      dataType: "json",
      success: function (result) {
        console.log(result);
        localStorage.setItem("user_token", result.token);
        window.location.replace("index.html");
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        toastr.error(XMLHttpRequest.responseJSON.message);
      },
    });
  },
  register: function (user) {
    $.ajax({
      type: "POST",
      url: ' rest/register',
      data: JSON.stringify(user),
      contentType: "application/json",
      dataType: "json",

      success: function (data) {
        localStorage.setItem("token", data.token);
        toastr.success('You have been succesfully registered.');
        localStorage.clear();

      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        toastr.error(XMLHttpRequest.responseJSON.message);
      }
    });
  },

  logout: function () {
    localStorage.clear();
    window.location.replace("login.html");
  },
};