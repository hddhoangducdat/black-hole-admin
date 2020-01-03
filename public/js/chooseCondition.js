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
        window.location.href = "/management/shopping";
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
        window.location.href = "/management/shopping";
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
        window.location.href = "/management/shopping";
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
        window.location.href = "/management/shopping";
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
