$(document).ready(function() {
  const wishlist = $(".wishlist");
  $(".btn-save-list").hide();

  $(".btn-add-item").click(function() {
    let values = $("#inputNameItem");
    let quantity = $("#inputQtdItem");
    let typeItem = $(".form-check input:checked");
    wishlist.append(
      "<li class='list-group-item'>" +
        quantity.val() +
        " " +
        typeItem.val() +
        " " +
        values.val() +
        "</li>"
    );
    values.val("");
    quantity.val("");

    const count = wishlist.children().length;
    if (count > 0) {
      $(".btn-save-list").show();
    }
  });
});
