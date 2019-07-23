// SmartMenus init
$(function () {
  $('#main-menu').smartmenus({
    mainMenuSubOffsetX: -1,
    subMenusSubOffsetX: 10,
    subMenusSubOffsetY: 0
  });
});

// Close on ESC
$(function () {
  $(document).keyup(function (e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      document.getElementById("toggle").setAttribute("aria-expanded", "false");
      document.getElementById("main-menu").classList.remove("dblock");
    }
  });
});

// Toggle Aria
function toggleAria() {

  var ariastate = document.getElementById("toggle").getAttribute("aria-expanded");
  if (ariastate == "true") {
    document.getElementById("toggle").setAttribute("aria-expanded", "false");
    document.getElementById("main-menu").classList.remove("dblock");
  } else {
    document.getElementById("toggle").setAttribute("aria-expanded", "true");
    document.getElementById("main-menu").classList.add("dblock");
  }

}
