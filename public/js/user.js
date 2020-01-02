$(document).ready(function() {
  $(".deleteuser").on("click", function() {
    const userId = $(this).data("id");
    $.ajax({
      url: "home/delete",
      type: "POST",
      data: {
        id: userId
      },
      beforSend: function() {},
      success: function(res) {
        window.location.href = res.redirect;
      }
    });
  });
});
