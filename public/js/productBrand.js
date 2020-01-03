$(document).ready(function() {
  $(".productItem").on("click", function() {
    let brandId = $(this).data("id");
    $.ajax({
      url: `/user/delete`,
      type: "POST",
      data: {
        id: brandId
      },
      beforeSend: function() {
        //console.log(this.data);
      },
      success: function(res) {
        window.location.href = res.redirect;
      }
    });
  });

  function scrollToDownload() {
    if ($(".section-download").length != 0) {
      $("html, body").animate(
        {
          scrollTop: $(".section-download").offset().top
        },
        1000
      );
    }
  }
});
