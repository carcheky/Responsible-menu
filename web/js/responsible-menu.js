// SmartMenus init
$(function () {
  $('#main-menu').smartmenus({
    mainMenuSubOffsetX: 1,
    mainMenuSubOffsetX: -1,
    subMenusSubOffsetX: 10,
    subMenusSubOffsetY: 0,
    noMouseOver: true,
    markCurrentItem: true,
    markCurrentTree: true,
    subMenusMinWidth: '100%'
    // showOnClick: true
  });
});

// Close on ESC
$(function () {
  $(document).keyup(function (e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      document.getElementById("toggle").setAttribute("aria-expanded", "false");
      document.getElementById("main-menu").classList.remove("dblock");
      document.getElementById("toggle").classList.remove("dblock");
    }
  });
});

// Toggle Aria
function toggleAria() {
  var ariastate = document.getElementById("toggle").getAttribute("aria-expanded");
  if (ariastate == "true") {
    // console.log('false, class dblock removed');
    document.getElementById("main-menu").classList.remove("dblock");
    document.getElementById("toggle").classList.remove("dblock");
    document.getElementById("toggle").setAttribute("aria-expanded", "false");
  } else {
    // console.log('true, class dblock added');
    document.getElementById("main-menu").classList.add("dblock");
    document.getElementById("toggle").classList.add("dblock");
    document.getElementById("toggle").setAttribute("aria-expanded", "true");
  }
}
