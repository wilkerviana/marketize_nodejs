$(document).ready(function() {
  const inputEmail = $("#inputEmail.form-control");
  inputEmail.focusout(function() {
    let emailError = $("#inputEmail.form-control:invalid");
    if (!emailError) {
      $(".btn-form").attr("disabled", false);
    }
  });
});
