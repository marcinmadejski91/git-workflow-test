$ = jQuery;

var minRandomNumber = 21;
var maxRandomNumber = 78;

var maxNumber = 147;

var minRandomReloadTime = 1*10*1000; //30 sek
var maxRandomReloadTime = 1*20*1000;//1 min

var minAddOrders = 1;
var maxAddOrders = 5;

var randomNumber = randomNumberFromRange(minRandomNumber, maxRandomNumber);

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setCookie(key, value) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (1 * 4 * 60 * 60 * 1000));
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}

function reloadUsers24(){

  if(getCookie("users24")!==null){
    c = Number(getCookie("users24"));
    if(c<maxNumber){
      setCookie("users24", c+randomNumberFromRange(minAddOrders, maxAddOrders));
      $(".count-users").html('Purchased <span class="red-fade-out">'+getCookie("users24")+'</span> times in the last 24 hours!');
    }
  } else {
    setCookie("users24", randomNumber);
    $(".count-users").html('Purchased <span class="red-fade-out">'+randomNumber+'</span> times in the last 24 hours!');
  }

}
function shortNotification(){

  var minRndNumber = 8;
  var maxRndNumber = 15;

  var rndNumber = randomNumberFromRange(minRndNumber, maxRndNumber);

  var $notification = $(".short_notification");

  $notification.html(rndNumber+' people are currently looking');

  setTimeout(function() {
      $notification.addClass("short_notification--show");
  }, 2000);
  setTimeout(function() {
      $notification.removeClass("short_notification--show");
  }, 6000);


}
function sameHeightTestimonials() {
  if($(window).width() > 767){
    var height = 0;
    $('.testimonials_new__col').each(function(index, el) {
      if($(this).height() > height){
        height = $(this).height();
      }
    });
    $('.testimonials_new__col').height(height);
  }
  else {
    $('.testimonials_new__col').height('auto');
  }
}
function changeFotoDesktop(foto){
		document.getElementById('desktop-main-image').setAttribute('src', foto);
}
function changeFotoMobile(foto){
		document.getElementById('mobile-main-image').setAttribute('src', foto);
}
function popup_close(){
  $('.popup_info').css('display', 'none');
}
function popup_show(){
  $('.popup_info').css('display', 'block');
}
function goAmazon(){
	window.open("http://a.co/cvqGI2p");
}
$(document).ready(function() {

  shortNotification();

  $("#countdownTablet, #countdownMobile").countdown({
				date: "30 august 2017 23:59:00",
				format: "on"
			});



  if(getCookie("users24")!==null){
    $(".count-users").html('Purchased <span class="red-fade-out">'+getCookie("users24")+'</span> times in the last 24 hours!');
  } else {
    setCookie("users24", randomNumber);
    $(".count-users").html('Purchased <span class="red-fade-out">'+randomNumber+'</span> times in the last 24 hours!');
  }
  setInterval("reloadUsers24()", randomNumberFromRange(minRandomReloadTime, maxRandomReloadTime));

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        console.log(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 80
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


});

$(window).on("load", function() {
  sameHeightTestimonials();
});
$(window).on('resize', function() {
  sameHeightTestimonials();
});
$(window).scroll(function() {
	var top = $('#product');
	var start = $(top).height() - 360;
		if ($(this).scrollTop() > start){
		    $('.sticy_buynow').addClass("open-sticky");
		  }
		  else{
		    $('.sticy_buynow').removeClass("open-sticky");
		  }
});
