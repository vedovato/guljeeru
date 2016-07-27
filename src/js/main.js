(function($){

  var mobileNavigation = function() {
    $('#mobileMenuTrigger').on('click', function() {
      $('#mobileMenuTrigger').toggleClass('mobileMenuActive')
      $('nav#first').toggleClass('mobileSubMenuActive')
      $('nav#last').toggleClass('mobileSubMenuActive')
    })
  }

  // --------------------

  $(document).ready(function() {
    mobileNavigation()
  })

  // --------------------

  $(window).resize(function() {})

})(jQuery)
