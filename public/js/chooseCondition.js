$(document).ready(function() {
  $(".deleteBill").on("click", function() {
    let billId = $(this).data("id");
    $.ajax({
      url: "shopping/cancleBill",
      type: "POST",
      data: {
        id: billId
      },
      beforeSend: function() {
        //console.log(this.data);
      },
      success: function(res) {
        window.location.href = res.redirect;
      }
    });
  });

  $(".findItem").on("click", function() {
    let billId = $(this).data("id");
    $.ajax({
      url: "shopping/findItem",
      type: "POST",
      data: {
        id: billId
      },
      beforeSend: function() {
        //console.log(this.data);
      },
      success: function(res) {
        window.location.href = res.redirect;
      }
    });
  });

  $(".shippingItem").on("click", function() {
    let billId = $(this).data("id");
    $.ajax({
      url: "shopping/shippingItem",
      type: "POST",
      data: {
        id: billId
      },
      beforeSend: function() {
        //console.log(this.data);
      },
      success: function(res) {
        window.location.href = res.redirect;
      }
    });
  });

  $(".finishItem").on("click", function() {
    let billId = $(this).data("id");
    $.ajax({
      url: "shopping/finishItem",
      type: "POST",
      data: {
        id: billId
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
