/*====================================================
NAVIGATION
====================================================*/
//Show/Hide transparent black navigation
$(function () {

$(window).scroll(function () {

if ($(this).scrollTop() < 40) {
//hide nav
$("nav").removeClass("vesco-top-nav");
$("#back-to-top").fadeOut();

} else {
//show nav
$("nav").addClass("vesco-top-nav");
$("#back-to-top").fadeIn();
}
});
});

//Close mobile menu on click
$(function(){

$(".navbar-collapse ul li a").on("click touch", function(){

$(".navbar-toggle").click();
});
});

var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

$('#sidebar').affix({
      offset: {
        top: 245,
        bottom: navHeight
      }
});


$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});

/*====================================================
WORK
====================================================*/
$(function () {

$("#work").magnificPopup({
delegate: 'a', // child items selector, by clicking on it popup will open
type: 'image',
gallery: {
enabled: true
}

});
});

/*====================================================
                        TEAM
====================================================*/
$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 3
		  }
		}
    });
});