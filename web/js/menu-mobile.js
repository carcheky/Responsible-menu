$(function() {
  $('#main-nav ul.main-menu').smartmenus();

  $('.closed button.toggle').click(function() {
    $('#main-nav.closed ul.main-menu').toggle();
    $('#main-nav.closed button.toggle').attr('aria-expanded', 'true');
    $('#main-nav.closed').addClass('opened');
    $('#main-nav.opened.closed').removeClass('closed');
  });

  $('.opened button.toggle').click(function() {
    $('#main-nav.opened ul.main-menu').toggle();
    $('#main-nav.opened button.toggle').attr('aria-expanded', 'true');
    $('#main-nav.opened').addClass('closed');
    $('#main-nav.opened.closed').removeClass('opened');
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      // escape key maps to keycode `27`
      $('#main-nav').hide();
    }
  });
});
