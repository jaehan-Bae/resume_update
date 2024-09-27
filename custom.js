  /* Header Scroll Change */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  });
  
// Window Open event 
  function openWindow(event, width, height, url) {
    event.preventDefault();
    var leftPos = Math.floor((screen.width - width) / 2);
    var topPos = Math.floor((screen.height - height) / 2);
    var newWindow = window.open(url, '', 'width=' + width + ', height=' + height + ', top=' + topPos + ', left=' + leftPos);
    return false;
  }