$(function () {

  $('#main-nav ul.main-menu').smartmenus();

  $("#toggle.closed").click(function () {
    $(".closed").addClass("opened");
    $(".closed").attr("aria-expanded", "true");
    $('.closed + ul.main-menu').toggle();
    $(".closed").removeClass("closed");
  });

  $("#toggle.opened").click(function () {
    $(".opened").addClass("closed");
    $(".opened").attr("aria-expanded", "false");
    $('.opened + ul.main-menu').toggle();
    $(".opened").removeClass("opened");
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      $("#main-nav ul.main-menu").hide()
    }
  });

});
