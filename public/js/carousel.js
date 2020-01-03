$(document).ready(function() {
  $(".carouselClick").on("click", function(e) {
    e.preventDefault();
    let productId = $(this).data("id");
    $.ajax({
      url: "/management/product/carousel",
      type: "POST",
      data: {
        id: productId
      },
      beforeSend: function() {
        //console.log(this.data);
      },
      success: function(res) {
        window.location.href = "/management/product";
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
